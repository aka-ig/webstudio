import React, { useState } from 'react';
import './category.component.scss';

enum TabName {
  WIDGET = 'widget',
  PROJECT = 'project'
}

export default function ComponentCategory() {

  const [currentTabName, setCurrentTabName] = useState<TabName>(TabName.WIDGET);

  function handleSwitchTab(event: React.MouseEvent<HTMLAnchorElement>, tabName: TabName) {
    event.preventDefault();
    setCurrentTabName(tabName);
  }

  const PartialWidgets = (<div>Widgets</div>);
  const PartialProject = (<div>Project</div>);

  return (
    <div className='ws-component-category flex-column'>
      <ul className='nav nav-tabs nav-justified'>
        <li className='nav-item'>
          <a className={'nav-link' + (currentTabName === TabName.WIDGET ? ' active' : '')} href='' onClick={(e) => handleSwitchTab(e, TabName.WIDGET)}>Widget</a>
        </li>
        <li className='nav-item'>
          <a className={'nav-link' + (currentTabName === TabName.PROJECT ? ' active' : '')} href='' onClick={(e) => handleSwitchTab(e, TabName.PROJECT)}>Project</a>
        </li>
      </ul>
      <div className='flex-this'>
        {currentTabName === TabName.WIDGET && PartialWidgets}
        {currentTabName === TabName.PROJECT && PartialProject}
      </div>
    </div>
  )
}
