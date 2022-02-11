import React, { MouseEvent, useContext, useEffect, useMemo, useRef } from 'react';
import { IWidget } from '../../interfaces';
import { EditPageContext } from '../../pages/edit/edit.page.context';

export interface IComponentWidgetProps {
  widget: IWidget;
}

export function ComponentWidget(props: IComponentWidgetProps) {

  const widgetInnerRef = useRef<HTMLDivElement>(null);
  const editPageContext = useContext(EditPageContext);

  useEffect(() => {
    console.log(props.widget);
  }, [props.widget]);

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    console.log(props.widget);
    editPageContext.handleSelectedWidgetChange(props.widget);
  }

  const useClassName = useMemo(() => {
    return ['widget widget-' + props.widget.type, editPageContext.selectedWidget === props.widget ? 'selected' : ''].filter(Boolean).join(' ');
  }, [editPageContext.selectedWidget, props.widget, props.widget.type]);

  return (
    <div className={useClassName} onClick={handleClick}>
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
