import React, { ChangeEvent, useState } from 'react';
import './form-editor-field.component.scss';
import { IComponentFormEditorFieldProps } from './interfaces';

export function ComponentFormEditorSelect(props: IComponentFormEditorFieldProps) {

    const setVersion = useState<number>(0)[1];

    const label = props.blueprint.attrs[props.attrKey].label;
    const value = props.widget.attrs[props.attrKey];
    const options = props.blueprint.attrs[props.attrKey].options;


    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
        props.widget.attrs[props.attrKey] = e.target.value;
        setVersion(v => ++v);
        props.onChange();
    }

    return (
        <div className='ws-component-form-editor-select'>
            <label className='form-editor-field-label'>{label}</label>
            <div className='form-editor-field-control'>
                <select value={value} onChange={handleChange}>
                    {options.map(o => (
                        <option key={o} value={o} label={o}></option>
                    ))}
                </select>
            </div>
        </div>
    );
}
