import React from 'react';

const noop = () => { };

export interface IEditPageContext {
  selectedWidget: any;
  handleSelectedWidgetChange: (widget: any) => void;
  handleModeChange: (mode: string) => void;
}

export const EditPageContext = React.createContext<IEditPageContext>({
  selectedWidget: null,
  handleModeChange: noop,
  handleSelectedWidgetChange: noop
});
