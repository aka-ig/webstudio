import { v4 as uuidv4 } from 'uuid';
import { IWidget, IWidgetAttrs, IWidgetBlueprint, WidgetType } from '../interfaces';
import {
  WidgetNotExist,
  WidgetWebsiteBlueprint,
  WidgetNotExistBlueprint,
  WidgetPageBlueprint,
  WidgetHrBlueprint,
  WidgetNavigatorBlueprint,
  WidgetPageholderBlueprint,
  WidgetProjectBlueprint
} from '../widgets';
import { WidgetBoxBlueprint } from '../widgets/box.widget';
import { WidgetHeadingTagBlueprint } from '../widgets/heading.widget';
import { WidgetImageBlueprint } from '../widgets/image.widget';

export function getWidgetByType(widgetType: WidgetType) {
  switch (widgetType) {
    case WidgetType.HEADINGTAG:
    default:
      return WidgetNotExist
  }
}

export function getWidgetBlueprintByType(widgetType: WidgetType): IWidgetBlueprint {
  let blueprint: IWidgetBlueprint = WidgetNotExistBlueprint;
  switch (widgetType) {
    case WidgetType.PROJECT:
      blueprint = WidgetProjectBlueprint;
      break;
    case WidgetType.WEBSITE:
      blueprint = WidgetWebsiteBlueprint;
      break;
    case WidgetType.PAGEHOLDER:
      blueprint = WidgetPageholderBlueprint;
      break;
    case WidgetType.NAVIGATOR:
      blueprint = WidgetNavigatorBlueprint;
      break;
    case WidgetType.PAGE:
      blueprint = WidgetPageBlueprint;
      break;
    case WidgetType.HR:
      blueprint = WidgetHrBlueprint;
      break;
    case WidgetType.HEADINGTAG:
      blueprint = WidgetHeadingTagBlueprint;
      break;
    case WidgetType.BOX:
      blueprint = WidgetBoxBlueprint;
      break;
    case WidgetType.IMAGE:
      blueprint = WidgetImageBlueprint;
      break;
  }
  return blueprint;
}

export function createWidgetByType(widgetType: WidgetType): IWidget {
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
    children: [],
  };

  return widget;
}

export function renderWidget(widgetType: WidgetType) {
  const blueprint = getWidgetBlueprintByType(widgetType);
  return blueprint.forEditor.widgetInnerHTML;
}

export function deleteWidget(widget: IWidget) {
  const blueprint = getWidgetBlueprintByType(widget.type);
  if(!blueprint.forEditor.props.isNotDeletable) {

  }
}