import React, { ChangeEvent, useContext, useEffect, useMemo, useState } from 'react';
import { IWidget, IWidgetBlueprint } from '../../interfaces';
import './form-editor-field.component.scss';

export interface IComponentFormEditorFieldProps {
  widget: IWidget;
  attrKey: string;
  attrValue: any;
  blueprint: IWidgetBlueprint;
}

export function ComponentFormEditorField(props: IComponentFormEditorFieldProps) {

  const setVersion = useState<number>(0)[1];

  const label = props.blueprint.attrs[props.attrKey].label;
  const value = props.widget.attrs[props.attrKey];

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    props.widget.attrs[props.attrKey] = e.target.value;
    setVersion(v => ++v);
  }

  return (
    <div className='ws-component-form-editor-field'>
        <label>{label}</label>
        <div>
          <input type='text' value={value} onChange={handleChange} />
        </div>
    </div>
  );
}
