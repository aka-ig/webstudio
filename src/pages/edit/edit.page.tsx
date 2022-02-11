import React, { useEffect, useState } from 'react';
import { ComponentCanvas, ComponentCategory, ComponentHeader, ComponentWizard } from '../../components';
import './edit.page.scss';
import { EditPageContext, IEditPageContext } from './edit.page.context';

export function PageEdit() {

  const [selectedWidget, setSelectedWidget] = useState<any>(null);

  useEffect(() => {

  }, []);

  const [mode, setmode] = useState('');

  function handleModeChange(mode: string) {
    setmode(mode);
  }

  function handleSelectedWidgetChange(widget: any) {
    setSelectedWidget(widget);
  }

  const editPageContextValue: IEditPageContext = {
    selectedWidget,
    handleSelectedWidgetChange,
    handleModeChange,
  }

  return (
    <div className='ws-page-edit d-flex flex-column'>
      <EditPageContext.Provider value={editPageContextValue}>
        <ComponentHeader mode={mode} />
        <div className='flex-this flex-row'>
          <ComponentCategory />
          <ComponentCanvas />
          <ComponentWizard />
        </div>
      </EditPageContext.Provider>
    </div>
  );
}


