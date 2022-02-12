import { WidgetType } from "../interfaces";

export const WidgetWebsiteBlueprint = {
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
    widgetInnerHTML: <div></div>,
    props: {
      isNotDeletable: true
    }
  },
  forCodeGen: {}
};
