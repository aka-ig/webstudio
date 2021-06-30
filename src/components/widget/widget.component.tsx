import React, { useEffect, useRef } from 'react';
import { IWidget } from '../../interfaces';

export interface IComponentWidgetProps {
  widget: IWidget;
}

export function ComponentWidget(props: IComponentWidgetProps) {

  const widgetInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(props.widget);
  }, [props.widget]);

  return (
    <div className={'widget widget-' + props.widget.type}>
      <div className='widget-drawer'></div>
      <div className='binding-drawer'></div>
      <div className='widget-inner' ref={widgetInnerRef}>
        {props.widget.name}
        {props.widget.children.map(childWidget => (
          <ComponentWidget key={childWidget.wid} widget={childWidget} />
        ))}
      </div>
    </div>
  )
}
