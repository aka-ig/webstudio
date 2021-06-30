import { v4 as uuidv4 } from 'uuid';
import { IWidget, IWidgetAttrs, IWidgetBlueprint } from '../interfaces';
import { WidgetNotExist, WidgetWebsiteBlueprint, WidgetNotExistBlueprint, WidgetPageBlueprint, WidgetHrBlueprint, WidgetNavigatorBlueprint, WidgetPageholderBlueprint } from '../widgets';




export function getWidgetByType(widgetType: string) {
  switch (widgetType) {
    case 'heading':
    default:
      return WidgetNotExist
  }
}

export function getWidgetBlueprintByType(widgetType: string): IWidgetBlueprint {
  let blueprint: IWidgetBlueprint = WidgetNotExistBlueprint;
  switch (widgetType) {
    case 'website':
      blueprint = WidgetWebsiteBlueprint;
      break;
    case 'pageholder':
      blueprint = WidgetPageholderBlueprint;
      break;
    case 'navigator':
      blueprint = WidgetNavigatorBlueprint;
      break;
    case 'page':
      blueprint = WidgetPageBlueprint;
      break;
    case 'hr':
      blueprint = WidgetHrBlueprint;
  }
  return blueprint;
}

export function createWidgetByType(widgetType: string): IWidget {
  const blueprint = getWidgetBlueprintByType(widgetType);
  const attrs: IWidgetAttrs = {};
  Object.keys(blueprint.attrs).forEach(attrKey => {
    attrs[attrKey] = blueprint.attrs[attrKey].default;
  });
  const widget: IWidget = {
    type: blueprint.type,
    name: blueprint.name,
    wid: uuidv4(),
    attrs: attrs,
    children: []
  };

  return widget;
}

export function renderWidget(widgetType: string) {
  const blueprint = getWidgetBlueprintByType(widgetType);
  return blueprint.forEditor.widgetInnerHTML;
}
