import React from 'react'

export function WidgetHeading() {
  return (
    <div className='widget widget-heading'>

    </div>
  )
}

export const WidgetHeadingBlueprint = {
  type: 'heading',
  name: 'Heading',
  attrs: {
    headingType: {
      label: 'Heading Type',
      type: 'radio',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      default: 'h1'
    },
    text: {
      label: '',
      type: 'text',
      default: 'Heading Text'
    }
  },
  forEditor: {},
  forCodeGen: {}
};
