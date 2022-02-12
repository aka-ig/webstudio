import { WidgetType } from "../interfaces";

export const WidgetNavigatorBlueprint = {
  type: WidgetType.NAVIGATOR,
  name: 'Navigator',
  attrs: {},
  forEditor: {
    widgetInnerHTML: <div></div>
  },
  forCodeGen: {}
};
