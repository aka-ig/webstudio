import React from 'react'

export function WidgetNotExist() {
  return (
    <div className='widget widget-not-exist'>
      <div className='alert alert-danger' role='alert'>
        This widget no longer exist.
      </div>
    </div>
  )
}


export const WidgetNotExistBlueprint = {
  type: 'not-exist',
  name: 'Not Exist',
  attrs: {},
  forEditor: {
    widgetInnerHTML: <div></div>
  },
  forCodeGen: {}
};
