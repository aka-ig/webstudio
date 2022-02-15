import React, { useContext } from 'react'
import { EditPageContext } from '../../pages/edit/edit.page.context'

export function ComponentProjectTree() {

  const editPageContext = useContext(EditPageContext);
  const projectRoot = editPageContext.project;

  return (
    <div className='ws-component-project-tree'>
      {projectRoot.name}
    </div>
  )
}
