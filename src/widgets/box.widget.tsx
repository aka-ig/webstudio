import { WidgetType } from "../interfaces";

export const WidgetHeadingBlueprint = {
  type: WidgetType.BOX,
  name: 'Box',
  attrs: {},
  forEditor: {
    widgetInnerHTML: '<div></div>'
  },
  forCodeGen: {}
};
