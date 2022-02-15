import { HTMLProps } from 'react';
import { IWidgetBlueprint, WidgetType } from '../interfaces';

interface IWidgetPage extends HTMLProps<HTMLDivElement> {}

export function WidgetPage(props: IWidgetPage) {
  return (
    <div {...props}>
      {props.children}
    </div> 
  )
}

export const WidgetPageBlueprint: IWidgetBlueprint = {
  type: WidgetType.PAGE,
  name: 'Page',
  attrs: {
    name: {
      label: 'Page Name',
      type: 'text',
      default: 'Page'
    }
  },
  forEditor: {
    widgetInnerHTML: WidgetPage,
    props: {
      canHaveVisibleChildren: true
    }
  },
  forCodeGen: {}
};
