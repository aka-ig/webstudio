import { HTMLProps } from 'react';
import Button from '@material-ui/core/Button';
import { IWidgetBlueprint, WidgetType } from '../interfaces';

export interface IWidgetButtonProps extends HTMLProps<HTMLButtonElement> {
    text?: string;
}

export function WidgetButton(props: IWidgetButtonProps) {
    return (
        <Button variant='contained'>{props.text}</Button>
    );
}

export const WidgetButtonBlueprint: IWidgetBlueprint = {
    type: WidgetType.BUTTON,
    name: 'Button',
    attrs: {
        text: {
            label: 'Text',
            type: 'text',
            default: 'Click'
        }
    },
    forEditor: {
        widgetInnerHTML: WidgetButton,
        props: {
            canHaveVisibleChildren: false
        }
    },
    forCodeGen: {}
};
