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
import { WidgetButtonBlueprint } from '../widgets/button.widget';
import { WidgetHeadingTagBlueprint } from '../widgets/heading.widget';
import { WidgetImageBlueprint } from '../widgets/image.widget';
import { WidgetLabelBlueprint } from '../widgets/label.widge';
import { WidgetParagraphBlueprint } from '../widgets/paragraph.widget';
import { WidgetTableBlueprint } from '../widgets/table.widget';

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
    case WidgetType.BUTTON:
      blueprint = WidgetButtonBlueprint;
      break;
    case WidgetType.PARAGRAPH:
      blueprint = WidgetParagraphBlueprint;
      break;
    case WidgetType.TABLE:
      blueprint = WidgetTableBlueprint;
      break;
    case WidgetType.LABEL:
      blueprint = WidgetLabelBlueprint;
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
    parent: null,
  };

  return widget;
}

export function renderWidget(widgetType: WidgetType) {
  const blueprint = getWidgetBlueprintByType(widgetType);
  return blueprint.forEditor.widgetInnerHTML;
}

export function deleteWidget(widget: IWidget) {
  const blueprint = getWidgetBlueprintByType(widget.type);
  if (!blueprint.forEditor.props.isNotDeletable) {

  }
}

export function getWidgetById(project: IWidget, widgetId: string) {
  const stack = [project];
  while (stack.length > 0) {
    let cur = stack.pop();
    if (cur.wid === widgetId) {
      return cur;
    }
    cur.children.forEach(w => stack.push(w));
  }
  return null;
}
