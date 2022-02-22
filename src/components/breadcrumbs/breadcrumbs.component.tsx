import React, { MouseEvent, useContext, useEffect, useState } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { EditPageContext } from '../../pages/edit/edit.page.context';
import { IWidget } from '../../interfaces';

export function ComponentBreadcrumbs() {

  const editPageContext = useContext(EditPageContext);
  const [paths, setPaths] = useState<IWidget[]>([]);

  useEffect(() => {
    const nextPathArray: IWidget[] = [];
    let temp = editPageContext.selectedWidget;
    while (temp) {
      nextPathArray.unshift(temp);
      temp = temp.parent;
    }
    setPaths(nextPathArray);
  }, [editPageContext.selectedWidget]);

  function handleClick(event: MouseEvent<HTMLSpanElement>, widget: IWidget) {
    event.preventDefault();
    editPageContext.handleSelectedWidgetChange(widget);
  }

  return (
    <div className='ws-component-breadcrumbs'>
      <Breadcrumbs separator='›' aria-label='breadcrumb'>
        {paths.map(widget => (
          <Link key={widget.wid} color='inherit' href="/" onClick={(e: MouseEvent<HTMLSpanElement>) => handleClick(e, widget)}>{widget.name}</Link>
        ))}
      </Breadcrumbs>
    </div>
  )
}
