import { IWidgetBlueprint, WidgetType } from '../interfaces';

export const WidgetPageBlueprint: IWidgetBlueprint = {
  type: WidgetType.PAGE,
  name: 'Page',
  attrs: {
    pageName: {
      label: 'Page Name',
      type: 'text',
      default: 'Page'
    }
  },
  forEditor: {
    widgetInnerHTML: <div></div>
  },
  forCodeGen: {}
};
