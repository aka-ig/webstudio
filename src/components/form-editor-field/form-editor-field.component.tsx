import React from 'react';
import './form-editor-field.component.scss';
import { ComponentFormEditorRadio } from './form-editor-radio.component';
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
