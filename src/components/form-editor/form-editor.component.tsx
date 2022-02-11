import React, { useContext, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EditPageContext } from '../../pages/edit/edit.page.context';
import { createWidgetByType, WidgetType } from '../../services/widget.service';
import { ComponentWidget } from '../widget/widget.component';
import './form-editor.component.scss';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

export function ComponentFormEditor() {

  const editPageContext = useContext(EditPageContext);

  const currentSelectedWidget = editPageContext.selectedWidget || {};

  return (
    <div className='ws-component-form-editor flex-this'>
      <div className='form-header flex-row'>
        <label className='flex-this'>{currentSelectedWidget.name}</label>
        <FontAwesomeIcon className='widget-icon' icon={faTrashAlt} />
      </div>
    </div>
  );
}
