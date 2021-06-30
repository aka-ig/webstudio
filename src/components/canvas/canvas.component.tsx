import React, { useEffect, useMemo } from 'react'
import { createWidgetByType } from '../../services/widget.service';
import { ComponentWidget } from '../widget/widget.component';

export function ComponentCanvas() {

  // TODO: grab project
  const website = useMemo(() => {
    const nextPage = createWidgetByType('page');
    const nextNavigator = createWidgetByType('navigator');
    const nextPageholder = createWidgetByType('pageholder');
    const nextWebsite = createWidgetByType('website');
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
