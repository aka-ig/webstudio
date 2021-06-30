import React from 'react';
import { ComponentBreadcrumbs } from '../breadcrumbs/breadcrumbs.component';
import './wizard.component.scss';

export function ComponentWizard() {
  return (
    <div className='ws-component-wizard flex-column'>
      <ComponentBreadcrumbs />
      <div className='flex-this'></div>
    </div>
  )
}
