import React, { ChangeEvent, useState } from 'react';
import './form-editor-field.component.scss';
import { IComponentFormEditorFieldProps } from './interfaces';

export function ComponentFormEditorRadio(props: IComponentFormEditorFieldProps) {

    const setVersion = useState<number>(0)[1];

    const label = props.blueprint.attrs[props.attrKey].label;
    const value = props.widget.attrs[props.attrKey];
    const options = props.blueprint.attrs[props.attrKey].options;


    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        props.widget.attrs[props.attrKey] = e.target.value;
        setVersion(v => ++v);
        props.onChange();
    }

    return (
        <div className='ws-component-form-editor-radio'>
            <label className='form-editor-field-label'>{label}</label>
            <div className='form-editor-field-control'>
                {options.map(o => (
                    <label key={o} style={{marginRight: '8px'}}>
                        <input type='radio' value={o} checked={o === value} onChange={handleChange} /> {o}
                    </label>
                ))}
            </div>
        </div>
    );
}
