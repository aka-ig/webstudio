import { WidgetType } from "../interfaces";

export const WidgetHrBlueprint = {
  type: WidgetType.HR,
  name: 'Horizontal Divider Line',
  attrs: {},
  forEditor: {
    widgetInnerHTML: <hr />
  },
  forCodeGen: {}
};
