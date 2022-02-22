import React, { useEffect, useState } from 'react';
import { ComponentCanvas, ComponentCategory, ComponentHeader, ComponentWizard } from '../../components';
import './edit.page.scss';
import { EditPageContext, IEditPageContext } from './edit.page.context';
import { IWidget, WidgetType } from '../../interfaces';
import { createDefaultProject } from '../../services/project.service';
import { createWidgetByType, getWidgetById } from '../../services/widget.service';

export function PageEdit() {

  const setVersion = useState<number>(0)[1];
  const [selectedWidget, setSelectedWidget] = useState<IWidget>(null);
  const [project, setProject] = useState<IWidget>(null);
  const [website, setWebsite] = useState<IWidget>(null);
  const [mode, setmode] = useState('');

  useEffect(() => {
    // TODO: ajax grab project
    const nextProject = createDefaultProject();
    const nextWebsite = nextProject.children.find(w => w.type === WidgetType.WEBSITE);
    setProject(nextProject);
    setWebsite(nextWebsite);
  }, [])

  function handleModeChange(mode: string) {
    setmode(mode);
  }

  function handleSelectedWidgetChange(widget: IWidget) {
    setSelectedWidget(widget);
  }

  function handleRemoveWidget(widget: IWidget) {
    widget.parent.children = widget.parent.children.filter(w => w !== widget);
    setSelectedWidget(widget.parent);
  }

  function handleCreateWidget(newWidgetType: WidgetType, parentWidget: IWidget, targetIndex: number) {
    const newWidget = createWidgetByType(newWidgetType);
    parentWidget.children.splice(targetIndex, 0, newWidget);
    newWidget.parent = parentWidget;
    handleSelectedWidgetChange(newWidget);
  }

  function handleReorderWidget(widgetId: string, targetParentWidget: IWidget, targetIndex: number) {
    const widget = getWidgetById(project, widgetId);
    const widgetIndex = widget.parent.children.findIndex(w => w === widget);
    // TODO: Improve when reorder under the same parent
    if(widget.parent === targetParentWidget ) {
      if (widgetIndex === targetIndex || widgetIndex + 1 === targetIndex) {
        return;
      }
    }
    widget.parent.children = widget.parent.children.filter(w => w !== widget);
    widget.parent = targetParentWidget;
    targetParentWidget.children.splice(targetIndex, 0, widget);
    setVersion(v => ++v);
  }

  const editPageContextValue: IEditPageContext = {
    project,
    website,
    selectedWidget,
    handleSelectedWidgetChange,
    handleRemoveWidget,
    handleModeChange,
    handleCreateWidget,
    handleReorderWidget,
  }

  return project && (
    <div className='ws-page-edit d-flex flex-column'>
      <EditPageContext.Provider value={editPageContextValue}>
        <ComponentHeader mode={mode} />
        <div className='flex-this flex-row' style={{ overflow: 'hidden' }}>
          <ComponentCategory />
          <ComponentCanvas />
          <ComponentWizard />
        </div>
      </EditPageContext.Provider>
    </div>
  );
}
