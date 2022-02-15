import React, { useState } from 'react';
import { ComponentProjectTree } from '../project-tree/project-tree.component';
import { ComponentWidgetList } from '../widget-list/widget-list.component';
import './category.component.scss';

enum TabName {
  WIDGET = 'widget',
  PROJECT = 'project'
}

export function ComponentCategory() {

  const [currentTabName, setCurrentTabName] = useState<TabName>(TabName.WIDGET);

  function handleSwitchTab(event: React.MouseEvent<HTMLAnchorElement>, tabName: TabName) {
    event.preventDefault();
    setCurrentTabName(tabName);
  }

  return (
    <div className='ws-component-category flex-column'>
      <ul className='nav nav-tabs nav-justified'>
        <li className='nav-item'>
          <a className={'nav-link' + (currentTabName === TabName.WIDGET ? ' active' : '')} href='/' onClick={(e) => handleSwitchTab(e, TabName.WIDGET)}>Widget</a>
        </li>
        <li className='nav-item'>
          <a className={'nav-link' + (currentTabName === TabName.PROJECT ? ' active' : '')} href='/' onClick={(e) => handleSwitchTab(e, TabName.PROJECT)}>Project</a>
        </li>
      </ul>
      {currentTabName === TabName.WIDGET && <ComponentWidgetList />}
      {currentTabName === TabName.PROJECT && <ComponentProjectTree />}
    </div>
  )
}
