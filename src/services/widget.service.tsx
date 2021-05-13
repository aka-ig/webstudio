import { WidgetNotExist } from '../widgets';

export function getWidgetByType(widgetType: string) {
  switch (widgetType) {
    case 'heading':
    default:
      return WidgetNotExist
  }
}
