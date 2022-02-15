import { FunctionComponent } from 'react';

export enum WidgetType {
  PROJECT = 'project',
  WEBSITE = 'website',
  NAVIGATOR = 'navigator',
  PAGEHOLDER = 'pageholder',
  PAGE = 'page',
  HR = 'hr',
  HEADINGTAG = 'heading-tag',
  BOX = 'box',
  IMAGE = 'image',
  NOTEXIST = 'not-exist',
}

export interface IWidgetBlueprintCommonAttr {
  label: string;
  type: string;
  default: any;
  options?: any[];
}

export interface IWidgetBlueprintAttrs {
  [key: string]: IWidgetBlueprintCommonAttr
}

export interface IWidgetAttrs {
  [key: string]: any;
}

export interface IWidgetBlueprintForEditorProps {
  isNotDeletable?: boolean;
  canHaveVisibleChildren?: boolean;
}

export interface IWidgetBlueprintForEditor {
  widgetInnerHTML: FunctionComponent;
  props: IWidgetBlueprintForEditorProps;
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
