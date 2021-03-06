import { IWidgetBlueprint, WidgetType } from '../interfaces';

export function WidgetNotExist() {
  return (
    <div className='widget widget-not-exist'>
      <div className='alert alert-danger' role='alert'>
        This widget no longer exist.
      </div>
    </div>
  )
}

export const WidgetNotExistBlueprint: IWidgetBlueprint = {
  type: WidgetType.NOTEXIST,
  name: 'Not Exist',
  attrs: {},
  forEditor: {
    widgetInnerHTML: WidgetNotExist,
    props: {}
  },
  forCodeGen: {}
};
