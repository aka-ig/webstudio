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
  type: string;
  attrs: IWidgetBlueprintAttrs;
  forEditor: IWidgetBlueprintForEditor;
  forCodeGen: Object;
}

export interface IWidget {
  type: string;
  name: string;
  wid: string;
  attrs: IWidgetAttrs;
  children: IWidget[];
}
