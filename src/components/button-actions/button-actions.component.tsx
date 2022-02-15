import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './button-actions.component.scss';

export function ComponentButtonActions() {
  return (
    <div className='ws-component-button-actions'>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>Save</Button>
        <Button>Preview</Button>
        <Button>Publish</Button>
      </ButtonGroup>
    </div>
  );
}
