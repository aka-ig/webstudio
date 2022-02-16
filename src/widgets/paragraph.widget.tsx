import { HTMLProps } from 'react';
import { IWidgetBlueprint, WidgetType } from '../interfaces';

export interface IWidgetParagraphProps extends HTMLProps<HTMLParagraphElement> {
    text?: string;
}

export function WidgetParagraph(props: IWidgetParagraphProps) {
  return (
    <p>{props.text}</p>
  );
}

export const WidgetParagraphBlueprint: IWidgetBlueprint = {
  type: WidgetType.PARAGRAPH,
  name: 'Text Block',
  attrs: {
      text: {
        label: 'Text',
        type: 'textarea',
        default: 'Text Block'
      }
  },
  forEditor: {
    widgetInnerHTML: WidgetParagraph,
    props: {
      canHaveVisibleChildren: false
    }
  },
  forCodeGen: {}
};
