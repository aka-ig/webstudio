export enum WidgetType {
  PROJECT = 'project',
  WEBSITE = 'website',
  NAVIGATOR = 'navigator',
  PAGEHOLDER = 'pageholder',
  PAGE = 'page',
  HR = 'hr',
  HEADING = 'heading',
  BOX = 'box',
  NOTEXIST = 'not-exist',
}

export interface IWidgetBlueprintCommonAttr {
  label: string;
  type: string;
  default: any;
}

export interface IWidgetBlueprintAttrs {
  [key: string]: IWidgetBlueprintCommonAttr
}

export interface IWidgetAttrs {
  [key: string]: any;
}

export interface IWidgetBlueprintForEditor {
  widgetInnerHTML: JSX.Element;
}

export interface IWidgetBlueprint {
  name: string;
  type: WidgetType;
  attrs: IWidgetBlueprintAttrs;
  forEditor: IWidgetBlueprintForEditor;
  forCodeGen: Object;
}

export interface IWidget {
  type: WidgetType;
  name: string;
  wid: string;
  attrs: IWidgetAttrs;
  children: IWidget[];
}
