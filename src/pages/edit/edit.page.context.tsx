import React from 'react';

const noop = () => { };

export interface IEditPageContext {
  handleModeChange: (mode: string) => void;
}

export const EditPageContext = React.createContext<IEditPageContext>({
  handleModeChange: noop
});
