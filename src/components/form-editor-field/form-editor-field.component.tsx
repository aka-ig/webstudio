import React, { useContext, useEffect, useMemo } from 'react';
import { IWidget, IWidgetBlueprint } from '../../interfaces';
import './form-editor-field.component.scss';

export interface IComponentFormEditorFieldProps {
  widget: IWidget;
  attrKey: string;
  attrValue: any;
  blueprint: IWidgetBlueprint;
}

export function ComponentFormEditorField(props: IComponentFormEditorFieldProps) {

  return (
    <div className='ws-component-form-editor-field'>

    </div>
  );
}
