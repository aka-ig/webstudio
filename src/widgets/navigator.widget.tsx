import { HTMLProps } from 'react';
import { IWidgetBlueprint, WidgetType } from '../interfaces';

export interface IWidgetNavigatorProps extends HTMLProps<HTMLDivElement> {}

export function WidgetNavigator(props: IWidgetNavigatorProps) {
  return (
    <div className={''}>
      {props.children}
    </div> 
  )
}

export const WidgetNavigatorBlueprint: IWidgetBlueprint = {
  type: WidgetType.NAVIGATOR,
  name: 'Navigator',
  attrs: {},
  forEditor: {
    widgetInnerHTML: WidgetNavigator,
    props: {
      canHaveVisibleChildren: true
    }
  },
  forCodeGen: {}
};
