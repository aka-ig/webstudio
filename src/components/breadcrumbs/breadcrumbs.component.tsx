import React, { MouseEvent, useContext, useEffect } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { EditPageContext } from '../../pages/edit/edit.page.context'

export function ComponentBreadcrumbs() {

  const editPageContext = useContext(EditPageContext);

  useEffect(() => {
    console.log(editPageContext);
  }, [editPageContext.selectedWidget]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <div className='ws-component-breadcrumbs'>
      <Breadcrumbs separator='›' aria-label='breadcrumb'>
        <Link color="inherit" href="/" onClick={handleClick}>
          Material-UI
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
          Core
        </Link>
        <Link
          color="textPrimary"
          href="/components/breadcrumbs/"
          onClick={handleClick}
          aria-current="page"
        >
          Breadcrumb
        </Link>
      </Breadcrumbs>
    </div>
  )
}
