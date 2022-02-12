import React from 'react';
import { IWidget } from '../../interfaces';

export interface IEditPageContext {
  project: IWidget;
  website: IWidget;
  selectedWidget: IWidget;
  handleSelectedWidgetChange: (widget: IWidget) => void;
  handleModeChange: (mode: string) => void;
}

export const EditPageContext = React.createContext<IEditPageContext>(null);
