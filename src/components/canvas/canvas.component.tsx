import React, { useEffect, useMemo } from 'react'
import { createWidgetByType, WidgetType } from '../../services/widget.service';
import { ComponentWidget } from '../widget/widget.component';

export function ComponentCanvas() {

  // TODO: grab project
  const website = useMemo(() => {
    const nextPage = createWidgetByType(WidgetType.PAGE);
    const nextNavigator = createWidgetByType(WidgetType.NAVIGATOR);
    const nextPageholder = createWidgetByType(WidgetType.PAGEHOLDER);
    const nextWebsite = createWidgetByType(WidgetType.WEBSITE);
    nextPageholder.children.push(nextPage);
    nextWebsite.children.push(nextNavigator);
    nextWebsite.children.push(nextPageholder);
    return nextWebsite;
  }, []);

  useEffect(() => {
    // TODO: grab project

  }, [])

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
      <ComponentWidget widget={website} />

    </div>
  )
}
