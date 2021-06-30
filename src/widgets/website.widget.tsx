export const WidgetWebsiteBlueprint = {
  type: 'website',
  name: 'Website',
  attrs: {
    title: {
      label: 'Website Title',
      type: 'text',
      default: 'Website'
    }
  },
  forEditor: {
    widgetInnerHTML: <div></div>
  },
  forCodeGen: {}
};
