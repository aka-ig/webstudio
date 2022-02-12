import React, { useContext, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EditPageContext } from '../../pages/edit/edit.page.context';
import { createWidgetByType, getWidgetBlueprintByType } from '../../services/widget.service';
import { ComponentWidget } from '../widget/widget.component';
import './form-editor.component.scss';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { ComponentFormEditorField } from '../form-editor-field/form-editor-field.component';

export function ComponentFormEditor() {

  const editPageContext = useContext(EditPageContext);

  const currentSelectedWidget = editPageContext.selectedWidget;
  const widgetName = currentSelectedWidget?.name || '';
  const widgetAttrs = currentSelectedWidget?.attrs || {};
  const widgetBlueprint = getWidgetBlueprintByType(currentSelectedWidget?.type)

  return (
    <div className='ws-component-form-editor flex-this'>
      <div className='form-header flex-row'>
        <label className='flex-this'>{widgetName}</label>
        <FontAwesomeIcon className='widget-icon' icon={faTrashAlt} />
      </div>
      <div>
        {Object.keys(widgetAttrs).map(attrKey => (
          <ComponentFormEditorField key={attrKey} widget={currentSelectedWidget} attrKey={attrKey} attrValue={widgetAttrs[attrKey]} blueprint={widgetBlueprint} />
        )) }
      </div>
    </div>
  );
}
