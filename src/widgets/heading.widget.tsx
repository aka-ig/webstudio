import React, { HTMLProps } from 'react'
import { IWidgetBlueprint, WidgetType } from '../interfaces';

interface IWidgetHeadingTag extends HTMLProps<HTMLHeadingElement> {}

export function WidgetHeadingTag(props: IWidgetHeadingTag) {
  return (
    <h1>Heading</h1>
  )
}

export const WidgetHeadingTagBlueprint: IWidgetBlueprint = {
  type: WidgetType.HEADINGTAG,
  name: 'Heading',
  attrs: {
    headingTagType: {
      label: 'Heading Type',
      type: 'radio',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      default: 'h1'
    },
    text: {
      label: 'Text',
      type: 'text',
      default: 'Heading Text'
    }
  },
  forEditor: {
    widgetInnerHTML: WidgetHeadingTag,
    props: {
      canHaveVisibleChildren: false
    }
  },
  forCodeGen: {}
};
