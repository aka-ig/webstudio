import { HTMLProps } from 'react';
import { IWidgetBlueprint, WidgetType } from '../interfaces';

interface IWidgetBox extends HTMLProps<HTMLDivElement> {}

export function WidgetBox(props: IWidgetBox) {
  return (
    <div {...props}>
      {props.children}
    </div> 
  )
}

export const WidgetBoxBlueprint: IWidgetBlueprint = {
  type: WidgetType.BOX,
  name: 'Box',
  attrs: {},
  forEditor: {
    widgetInnerHTML: WidgetBox,
    props: {
      canHaveVisibleChildren: true
    }
  },
  forCodeGen: {}
};
