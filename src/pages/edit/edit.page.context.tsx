import React from 'react';
import { IWidget, WidgetType } from '../../interfaces';

export interface IEditPageContext {
  project: IWidget;
  website: IWidget;
  selectedWidget: IWidget;
  handleSelectedWidgetChange: (widget: IWidget) => void;
  handleRemoveWidget:(widget: IWidget) => void;
  handleModeChange: (mode: string) => void;
  handleCreateWidget: (newWidgetType: WidgetType, parentWidget: IWidget, targetIndex: number) => void;
  handleReorderWidget: (widgetId: string, targetParentWidget: IWidget, targetIndex: number) => void;
}

export const EditPageContext = React.createContext<IEditPageContext>(null);
