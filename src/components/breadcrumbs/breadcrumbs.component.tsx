import React, { useContext, useEffect } from 'react'
import { EditPageContext } from '../../pages/edit/edit.page.context'

export function ComponentBreadcrumbs() {

  const editPageContext = useContext(EditPageContext);

  useEffect(() => {
    console.log(editPageContext);
  }, [editPageContext.selectedWidget]);

  return (
    <div className='ws-component-breadcrumbs'>
      breadcrumbs
    </div>
  )
}
