import React from 'react';
import { ComponentButtonActions, ComponentFormEditor } from '..';
import { ComponentBreadcrumbs } from '../breadcrumbs/breadcrumbs.component';
import './wizard.component.scss';

export function ComponentWizard() {
  return (
    <div className='ws-component-wizard flex-column'>
      <ComponentBreadcrumbs />
      <ComponentFormEditor />
      <ComponentButtonActions />
    </div>
  )
}
