import { HTMLProps } from 'react';
import { IWidgetBlueprint, WidgetType } from '../interfaces';

interface IWidgetWebsite extends HTMLProps<HTMLDivElement> { }

export function WidgetWebsite(props: IWidgetWebsite) {
  return (
    <div {...props}>
      {props.children}
    </div>
  )
}

export const WidgetWebsiteBlueprint: IWidgetBlueprint = {
  type: WidgetType.WEBSITE,
  name: 'Website',
  attrs: {
    title: {
      label: 'Website Title',
      type: 'text',
      default: 'Website'
    }
  },
  forEditor: {
    widgetInnerHTML: WidgetWebsite,
    props: {
      isNotDeletable: true,
      isNotDraggable: true,
      canHaveVisibleChildren: true,
    }
  },
  forCodeGen: {}
};
