import { WidgetType } from "../interfaces";

export const WidgetPageholderBlueprint = {
  type: WidgetType.PAGEHOLDER,
  name: 'Pageholder',
  attrs: {},
  forEditor: {
    widgetInnerHTML: <div></div>
  },
  forCodeGen: {}
};
