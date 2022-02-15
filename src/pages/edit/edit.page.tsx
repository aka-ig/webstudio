import React, { useEffect, useState } from 'react';
import { ComponentCanvas, ComponentCategory, ComponentHeader, ComponentWizard } from '../../components';
import './edit.page.scss';
import { EditPageContext, IEditPageContext } from './edit.page.context';
import { IWidget, WidgetType } from '../../interfaces';
import { createDefaultProject } from '../../services/project.service';

export function PageEdit() {

  const [selectedWidget, setSelectedWidget] = useState<IWidget>(null);
  const [project, setProject] = useState<IWidget>(null);
  const [website, setWebsite] = useState<IWidget>(null);

  useEffect(() => {
    // TODO: ajax grab project
    const nextProject = createDefaultProject();
    const nextWebsite = nextProject.children.find(w => w.type === WidgetType.WEBSITE);
    setProject(nextProject);
    setWebsite(nextWebsite);
  }, [])

  const [mode, setmode] = useState('');

  function handleModeChange(mode: string) {
    setmode(mode);
  }

  function handleSelectedWidgetChange(widget: IWidget) {
    setSelectedWidget(widget);
  }

  function handleRemoveWidget(widget: IWidget) {

  }

  const editPageContextValue: IEditPageContext = {
    project,
    website,
    selectedWidget,
    handleSelectedWidgetChange,
    handleRemoveWidget,
    handleModeChange,
  }

  return project && (
    <div className='ws-page-edit d-flex flex-column'>
      <EditPageContext.Provider value={editPageContextValue}>
        <ComponentHeader mode={mode} />
        <div className='flex-this flex-row' style={{overflow:'hidden'}}>
          <ComponentCategory />
          <ComponentCanvas />
          <ComponentWizard />
        </div>
      </EditPageContext.Provider>
    </div>
  );
}


