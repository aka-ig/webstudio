import React, { MouseEvent, useContext, useEffect, useState } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { EditPageContext } from '../../pages/edit/edit.page.context';
import { IWidget } from '../../interfaces';

function recur(targetNode: IWidget, node: IWidget, temp: IWidget[], result: Array<IWidget[]>) {
  temp.push(node);
  if (node === targetNode) {
    result.push([...temp]);
    return;
  }
  node.children.forEach(child => {
    recur(targetNode, child, temp, result);
  });
  temp.pop();
}

export function ComponentBreadcrumbs() {

  const editPageContext = useContext(EditPageContext);
  const [paths, setPaths] = useState<IWidget[]>([]);

  useEffect(() => {
    const nextPathArray: Array<IWidget[]> = [];
    const temp: IWidget[] = [];
    if (editPageContext.selectedWidget) {
      recur(editPageContext.selectedWidget, editPageContext.project, temp, nextPathArray);
      setPaths(nextPathArray[0] || []);
    } else {
      setPaths([]);
    }
  }, [editPageContext.selectedWidget, editPageContext.project]);

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
