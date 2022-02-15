import React, { MouseEvent, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EditPageContext } from '../../pages/edit/edit.page.context';
import { getWidgetBlueprintByType } from '../../services/widget.service';
import './form-editor.component.scss';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { ComponentFormEditorField } from '../form-editor-field/form-editor-field.component';
import { widgetAttrService } from '../../pages/edit/edit.page.event';

export function ComponentFormEditor() {

  const editPageContext = useContext(EditPageContext);

  const currentSelectedWidget = editPageContext.selectedWidget;
  const widgetName = currentSelectedWidget?.name || '';
  const widgetAttrs = currentSelectedWidget?.attrs || {};
  const widgetBlueprint = getWidgetBlueprintByType(currentSelectedWidget?.type);

  function handleRemoveWidget(e: MouseEvent<HTMLOrSVGElement>) {

  }

  function handleAttrValueChange() {
    widgetAttrService.notify(currentSelectedWidget.wid);
  }

  return (
    <div className='ws-component-form-editor flex-this'>
      <div className='form-header flex-row'>
        <label className='flex-this'>{widgetName}</label>
        <FontAwesomeIcon className='widget-icon' icon={faTrashAlt} onClick={handleRemoveWidget} />
      </div>
      <div>
        {Object.keys(widgetAttrs).map(attrKey => (
          <ComponentFormEditorField onChange={handleAttrValueChange} key={attrKey} widget={currentSelectedWidget} attrKey={attrKey} attrValue={widgetAttrs[attrKey]} blueprint={widgetBlueprint} />
        )) }
      </div>
    </div>
  );
}
