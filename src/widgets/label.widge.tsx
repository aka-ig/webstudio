import { HTMLProps } from 'react';
import { IWidgetBlueprint, WidgetType } from '../interfaces';

export interface IWidgetLabelProps extends HTMLProps<HTMLLabelElement> {
    text?: string;
}

export function WidgetLabel(props: IWidgetLabelProps) {
    return (
        <label>{props.text}</label>
    );
}

export const WidgetLabelBlueprint: IWidgetBlueprint = {
    type: WidgetType.LABEL,
    name: 'Label',
    attrs: {
        text: {
            label: 'Text',
            type: 'text',
            default: 'Label'
        }
    },
    forEditor: {
        widgetInnerHTML: WidgetLabel,
        props: {
            canHaveVisibleChildren: false
        }
    },
    forCodeGen: {}
};
