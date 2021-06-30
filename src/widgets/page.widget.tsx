import { IWidgetBlueprint } from '../interfaces';

export const WidgetPageBlueprint: IWidgetBlueprint = {
  type: 'page',
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
