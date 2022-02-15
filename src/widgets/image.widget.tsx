import { HTMLProps } from 'react';
import { IWidgetBlueprint, WidgetType } from '../interfaces';

export interface IWidgetImageProps extends HTMLProps<HTMLImageElement> {

}

export function WidgetImage(props: IWidgetImageProps) {
  return (
    <img src={props.src} alt={props.alt} />
  );
}

export const WidgetImageBlueprint: IWidgetBlueprint = {
  type: WidgetType.IMAGE,
  name: 'Image',
  attrs: {
      src: {
          label: 'src',
          type: 'text',
          default: ''
      }
  },
  forEditor: {
    widgetInnerHTML: WidgetImage,
    props: {
        canHaveVisibleChildren: false
    }
  },
  forCodeGen: {}
};
