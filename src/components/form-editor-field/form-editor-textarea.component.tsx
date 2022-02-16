import React, { ChangeEvent, useState } from 'react';
import './form-editor-field.component.scss';
import { IComponentFormEditorFieldProps } from './interfaces';

export function ComponentFormEditorTextarea(props: IComponentFormEditorFieldProps) {

    const setVersion = useState<number>(0)[1];

    const label = props.blueprint.attrs[props.attrKey].label;
    const value = props.widget.attrs[props.attrKey];

    function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
        props.widget.attrs[props.attrKey] = e.target.value;
        setVersion(v => ++v);
        props.onChange();
    }

    return (
        <div className='ws-component-form-editor-textarea'>
            <label className='form-editor-field-label'>{label}</label>
            <div className='form-editor-field-control'>
                <textarea value={value} onChange={handleChange} />
            </div>
        </div>
    );
}
