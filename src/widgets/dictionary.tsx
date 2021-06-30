import { faPlayCircle, faSquare } from '@fortawesome/free-regular-svg-icons';
import { faHeading, faImage, faMinus, faParagraph, faTable, faTag, IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface IWidgetDictionaryItem {
  name: string;
  label: string;
  icon: IconDefinition;
}

export const WidgetDictionary: IWidgetDictionaryItem[] = [
  { name: 'heading', label: 'Heading', icon: faHeading },
  { name: 'text-block', label: 'Text Block', icon: faParagraph },
  { name: 'hr', label: 'Horizontal Divider Line', icon: faMinus },
  { name: 'image', label: 'Image', icon: faImage },
  { name: 'box', label: 'Box', icon: faSquare },
  { name: 'button', label: 'Button', icon: faPlayCircle },
  { name: 'label', label: 'Label', icon: faTag },
  { name: 'table', label: 'Table', icon: faTable }
];
