import React, { useContext, useEffect, useMemo } from 'react'
import { WidgetType } from '../../interfaces';
import { EditPageContext } from '../../pages/edit/edit.page.context';
import { createWidgetByType } from '../../services/widget.service';
import { ComponentWidget } from '../widget/widget.component';

export function ComponentCanvas() {

  const editPageContext = useContext(EditPageContext);

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    console.log('Div inner: ')
    event.preventDefault();
    event.stopPropagation();
    console.log(event.dataTransfer.getData('text'));
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <div className='flex-this' >
      <ComponentWidget widget={editPageContext.website} />
    </div>
  )
}
