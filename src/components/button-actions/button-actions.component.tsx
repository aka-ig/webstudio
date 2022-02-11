import React, { useEffect, useMemo } from 'react'
import { createWidgetByType, WidgetType } from '../../services/widget.service';
import { ComponentWidget } from '../widget/widget.component';
import './button-actions.component.scss';

export function ComponentButtonActions() {
  return (
    <div className='ws-component-button-actions'>
        <button>Save</button>
        <button>Preview</button>
        <button>Publish</button>
    </div>
  );
}
