import { faPlayCircle, faSquare } from '@fortawesome/free-regular-svg-icons';
import { faHeading, faImage, faMinus, faParagraph, faTable, faTag, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { WidgetType } from '../interfaces';

export interface IWidgetDictionaryItem {
  name: string;
  label: string;
  icon: IconDefinition;
}

export const WidgetDictionary: IWidgetDictionaryItem[] = [
  { name: WidgetType.HEADINGTAG, label: 'Heading', icon: faHeading },
  { name: 'text-block', label: 'Text Block', icon: faParagraph },
  { name: WidgetType.HR, label: 'Horizontal Divider Line', icon: faMinus },
  { name: WidgetType.IMAGE, label: 'Image', icon: faImage },
  { name: WidgetType.BOX, label: 'Box', icon: faSquare },
  { name: 'button', label: 'Button', icon: faPlayCircle },
  { name: 'label', label: 'Label', icon: faTag },
  { name: 'table', label: 'Table', icon: faTable }
];
