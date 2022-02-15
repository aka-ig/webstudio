import React, { DragEvent, FunctionComponent, MouseEvent, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { IWidget, WidgetType } from '../../interfaces';
import { EditPageContext } from '../../pages/edit/edit.page.context';
import { widgetAttrService } from '../../pages/edit/edit.page.event';
import { createWidgetByType, getWidgetBlueprintByType } from '../../services/widget.service';

export interface IComponentWidgetProps {
  widget: IWidget;
  className?: string;
}

export function ComponentWidget(props: IComponentWidgetProps) {

  const widgetInnerRef = useRef<HTMLDivElement>(null);
  const editPageContext = useContext(EditPageContext);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const setVersion = useState<number>(0)[1];

  useEffect(() => {
    const subscription = widgetAttrService.listen().subscribe((wid) => {
      if (props.widget.wid === wid) {
        props.widget.attrs = { ...props.widget.attrs };
        setVersion(v => ++v);
      }
    });
    return () => subscription.unsubscribe();
  }, [props.widget, setVersion]);

  const widgetBlueprint = useMemo(() => getWidgetBlueprintByType(props.widget.type), [props.widget]);

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    console.log(props.widget);
    editPageContext.handleSelectedWidgetChange(props.widget);
  }

  function handleDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (widgetBlueprint.forEditor.props.canHaveVisibleChildren) {
      setIsDragOver(true);
    }
  }

  function handleDragLeave(e: DragEvent<HTMLDivElement>) {
    setIsDragOver(false);
  }

  function handleOnDrop(e: DragEvent<HTMLDivElement>) {
    e.stopPropagation();
    e.preventDefault();
    if (widgetBlueprint.forEditor.props.canHaveVisibleChildren) {
      const data = e.dataTransfer.getData('text');
      const newWidget = createWidgetByType(data as WidgetType);
      props.widget.children.push(newWidget);
      editPageContext.handleSelectedWidgetChange(newWidget);
      setIsDragOver(false);
      console.log(data);
    }
  }

  const useClassName = useMemo(() => {
    return ['widget widget-' + props.widget.type, editPageContext.selectedWidget === props.widget ? 'selected' : '', props.className].filter(Boolean).join(' ');
  }, [editPageContext.selectedWidget, props.widget, props.className]);

  const useWidgetInnerClassName = ['widget-inner', isDragOver ? 'is-drag-over' : ''].filter(Boolean).join(' ');
  const WidgetElement = widgetBlueprint.forEditor.widgetInnerHTML as FunctionComponent;

  return (
    <div className={useClassName} onClick={handleClick}>
      <div className='widget-drawer'>{widgetBlueprint.name}</div>
      <div className='binding-drawer'></div>
      <div className={useWidgetInnerClassName} ref={widgetInnerRef} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleOnDrop}>
        {widgetBlueprint.forEditor.props.canHaveVisibleChildren ? (
          <WidgetElement {...props.widget.attrs}>
            {props.widget.children.map(childWidget => (
              <ComponentWidget key={childWidget.wid} widget={childWidget} />
            ))}
          </WidgetElement>
        ) : (
          <WidgetElement {...props.widget.attrs} />
        )}
      </div>
    </div>
  )
}
