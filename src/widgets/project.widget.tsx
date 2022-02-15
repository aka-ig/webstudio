import { HTMLProps } from 'react';
import { IWidgetBlueprint, WidgetType } from '../interfaces';

interface IWidgetProject extends HTMLProps<HTMLDivElement> {}

export function WidgetProject(props: IWidgetProject) {
  return (
    <div {...props}>
      {props.children}
    </div> 
  )
}

export const WidgetProjectBlueprint: IWidgetBlueprint = {
    type: WidgetType.PROJECT,
    name: 'Project',
    attrs: {
    //   title: {
    //     label: 'Website Title',
    //     type: 'text',
    //     default: 'Website'
    //   }
    },
    forEditor: {
      widgetInnerHTML: WidgetProject,
      props: {}
    },
    forCodeGen: {}
  };
  