import { HTMLProps } from 'react';
import { IWidgetBlueprint, WidgetType } from '../interfaces';

export function WidgetHR(props: HTMLProps<HTMLHRElement>) {
  return (
    <hr {...props} />
  );
}

export const WidgetHrBlueprint: IWidgetBlueprint = {
  type: WidgetType.HR,
  name: 'Horizontal Divider Line',
  attrs: {},
  forEditor: {
    widgetInnerHTML: WidgetHR,
    props: {
      canHaveVisibleChildren: false
    }
  },
  forCodeGen: {}
};
