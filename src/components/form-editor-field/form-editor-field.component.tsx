import React from 'react';
import './form-editor-field.component.scss';
import { ComponentFormEditorRadio } from './form-editor-radio.component';
import { ComponentFormEditorSelect } from './form-editor-select.component';
import { ComponentFormEditorText } from './form-editor-text.component';
import { ComponentFormEditorTextarea } from './form-editor-textarea.component';
import { IComponentFormEditorFieldProps } from './interfaces';

function getElementByType(type: string) {
  let inline = false;
  let element = null;
  if (type === 'radio') {
    inline = false;
    element = ComponentFormEditorRadio;
  } else if (type === 'radio-inline') {
    inline = true;
    element = ComponentFormEditorRadio;
  } else if (type === 'text') {
    inline = false;
    element = ComponentFormEditorText;
  } else if (type === 'text-inline') {
    inline = true;
    element = ComponentFormEditorText;
  } else if (type === 'textarea') {
    inline = false;
    element = ComponentFormEditorTextarea;
  } else if (type === 'textarea-inline') {
    inline = true;
    element = ComponentFormEditorTextarea;
  } else if (type === 'select') {
    inline = false;
    element = ComponentFormEditorSelect;
  } else if (type === 'select-inline') {
    inline = true;
    element = ComponentFormEditorSelect;
  } else {
    inline = false;
    element = null;
  }
  return { inline, element };
}

export function ComponentFormEditorField(props: IComponentFormEditorFieldProps) {
  const ElementObj = getElementByType(props.blueprint.attrs[props.attrKey].type);
  const MyElement = ElementObj.element;
  if (!MyElement) {
    return null;
  }
  return ( 
    <MyElement inline={ElementObj.inline} {...props} />
  );
}
