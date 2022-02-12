import { WidgetType } from "../interfaces";

export const WidgetProjectBlueprint = {
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
      widgetInnerHTML: <div></div>
    },
    forCodeGen: {}
  };
  