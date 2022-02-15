import React, { HTMLProps } from 'react'
import { IWidgetBlueprint, WidgetType } from '../interfaces';

interface IWidgetHeadingTag extends HTMLProps<HTMLHeadingElement> {
  headingTagType?: string;
  text?: string;
}

export function WidgetHeadingTag(props: IWidgetHeadingTag) {
  const { headingTagType, text, ...otherProps } = props;
  if (headingTagType === 'h2') {
    return <h2 {...otherProps}>{text}</h2>;
  } else if (headingTagType === 'h3') {
    return <h3 {...otherProps}>{text}</h3>;
  } else if (headingTagType === 'h4') {
    return <h4 {...otherProps}>{text}</h4>;
  } else if (headingTagType === 'h5') {
    return <h5 {...otherProps}>{text}</h5>;
  } else if (headingTagType === 'h6') {
    return <h6 {...otherProps}>{text}</h6>;
  } else {
    return <h1 {...otherProps}>{text}</h1>;
  } 
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
