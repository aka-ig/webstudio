import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ComponentHeader } from '../../components';
import { IProjectInfo } from '../../interfaces';

export function PageList() {

  const [filePath, setFilePath] = useState<string>('/');
  const [projectList, setProjectList] = useState<IProjectInfo[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    // TODO: ajax call to get project list according to file path
    setProjectList([
      { name: 'Project One', author: 'system', filePath: '/', created: new Date(), updated: new Date },
      { name: 'Project Two', author: 'system', filePath: '/', created: new Date(), updated: new Date }
    ]);
  }, [filePath]);

  function handleDelete(e: React.MouseEvent<HTMLAnchorElement>, project: IProjectInfo) {
    e.preventDefault();
    // TODO: ajax, remove project
    const nextProjectList = projectList.filter(p => p.name !== project.name);
    setProjectList(nextProjectList);
  }

  function handleShowModal() {
    setShowModal(true);
  }

  function handleHideModal() {
    setShowModal(false);
  }

  function handleCreateNewProject() {
    setShowModal(true);

  }

  return (
    <div className={'ws-page-list'}>
      <ComponentHeader />
      <div className='container'>
        <div className='page-header'>
          <h1>Your Projects</h1>
        </div>
        <div>
          <Button variant='primary' onClick={handleCreateNewProject}>New Project</Button>
        </div>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Created</th>
              <th scope='col'>Updated</th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {projectList.map((project: IProjectInfo) => (
              <tr key={project.name}>
                <td>{project.name}</td>
                <td>{project.created.toDateString()}</td>
                <td>{project.updated.toDateString()}</td>
                <td><a>Rename</a></td>
                <td><a>Preview</a></td>
                <td><a href='' onClick={(e) => handleDelete(e, project)}>Delete</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal show={showModal} onHide={handleHideModal} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleHideModal}>
            Close
          </Button>
          <Button variant='primary' onClick={handleHideModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


