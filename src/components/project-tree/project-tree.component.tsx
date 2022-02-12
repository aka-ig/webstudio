import React, { useContext } from 'react'
import { EditPageContext } from '../../pages/edit/edit.page.context'

export function ComponentProjectTree() {

  const editPageContext = useContext(EditPageContext);

  return (
    <div className='ws-component-project-tree'>
      Project
    </div>
  )
}
