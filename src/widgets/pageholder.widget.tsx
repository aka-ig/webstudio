import { HTMLProps } from 'react';
import { IWidgetBlueprint, WidgetType } from '../interfaces';

interface IWidgetPageholder extends HTMLProps<HTMLDivElement> {}

export function WidgetPageholder(props: IWidgetPageholder) {
  return (
    <div {...props}>
      {props.children}
    </div> 
  )
}

export const WidgetPageholderBlueprint: IWidgetBlueprint = {
  type: WidgetType.PAGEHOLDER,
  name: 'Pageholder',
  attrs: {},
  forEditor: {
    widgetInnerHTML: WidgetPageholder,
    props: {
      canHaveVisibleChildren: true
    }
  },
  forCodeGen: {}
};
