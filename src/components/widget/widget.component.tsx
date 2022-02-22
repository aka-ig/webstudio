import React, { DragEvent, Fragment, FunctionComponent, MouseEvent, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { IWidget } from '../../interfaces';
import { EditPageContext } from '../../pages/edit/edit.page.context';
import { widgetAttrService } from '../../pages/edit/edit.page.event';
import { getWidgetBlueprintByType } from '../../services/widget.service';
import { ComponentDropSpot } from '../drop-spot/drop-spot.component';

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
      const dataString = e.dataTransfer.getData('text');
      const transferDataObj = JSON.parse(dataString);
      const actionType = transferDataObj.type;
      if (actionType === 'create') {
        editPageContext.handleCreateWidget(transferDataObj.widgetType, props.widget, props.widget.children.length);
      } else if (actionType === 'reorder') {
        editPageContext.handleReorderWidget(transferDataObj.widgetId, props.widget, props.widget.children.length);
      }
      setIsDragOver(false);
    }
  }

  function handleDropSpotOnDrop(e: DragEvent<HTMLDivElement>, index: number) {
    e.stopPropagation();
    e.preventDefault();
    const dataString = e.dataTransfer.getData('text');
    const transferDataObj = JSON.parse(dataString);
    const actionType = transferDataObj.type;
    if (actionType === 'create') {
      editPageContext.handleCreateWidget(transferDataObj.widgetType, props.widget, index);
    } else if (actionType === 'reorder') {
      editPageContext.handleReorderWidget(transferDataObj.widgetId, props.widget, index);
    }
  }

  function handleDragStart(e: DragEvent<HTMLDivElement>) {
    e.stopPropagation();
    const transferDataObj = {
      type: 'reorder',
      widgetId: props.widget.wid
    };
    console.log(transferDataObj);
    e.dataTransfer.setData('text', JSON.stringify(transferDataObj));
  }

  const useClassName = useMemo(() => {
    return ['widget widget-' + props.widget.type, editPageContext.selectedWidget === props.widget ? 'selected' : '', props.className].filter(Boolean).join(' ');
  }, [editPageContext.selectedWidget, props.widget, props.className]);

  const useWidgetInnerClassName = [
    'widget-inner',
    isDragOver ? 'is-drag-over' : '',
    widgetBlueprint.forEditor.props.canHaveVisibleChildren ? '' : 'no-visible-children'
  ].filter(Boolean).join(' ');
  const WidgetElement = widgetBlueprint.forEditor.widgetInnerHTML as FunctionComponent;

  return (
    <div className={useClassName} onClick={handleClick} draggable={!widgetBlueprint.forEditor.props.isNotDraggable} onDragStart={handleDragStart} onDragOver={e => e.stopPropagation()}>
      <div className='widget-drawer'>{widgetBlueprint.name}</div>
      <div className='binding-drawer'></div>
      <div className={useWidgetInnerClassName} ref={widgetInnerRef} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleOnDrop}>
        {widgetBlueprint.forEditor.props.canHaveVisibleChildren ? (
          <Fragment>
            {props.widget.children.length > 0 && <ComponentDropSpot onDrop={handleDropSpotOnDrop} index={0} />}
            <WidgetElement {...props.widget.attrs}>
              {props.widget.children.map((childWidget, idx) => (
                <Fragment key={childWidget.wid} >
                  <ComponentWidget widget={childWidget} />
                  <ComponentDropSpot onDrop={handleDropSpotOnDrop} index={idx + 1} />
                </Fragment>
              ))}
            </WidgetElement>
          </Fragment>
        ) : (
          <WidgetElement {...props.widget.attrs} />
        )}
      </div>
    </div>
  )
}
