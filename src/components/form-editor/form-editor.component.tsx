import React, { MouseEvent, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { EditPageContext } from '../../pages/edit/edit.page.context';
import { getWidgetBlueprintByType } from '../../services/widget.service';
import './form-editor.component.scss';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { ComponentFormEditorField } from '../form-editor-field/form-editor-field.component';
import { widgetAttrService } from '../../pages/edit/edit.page.event';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export function ComponentFormEditor() {

  const editPageContext = useContext(EditPageContext);

  const currentSelectedWidget = editPageContext.selectedWidget;
  const widgetName = currentSelectedWidget?.name || '';
  const widgetAttrs = currentSelectedWidget?.attrs || {};
  const widgetBlueprint = getWidgetBlueprintByType(currentSelectedWidget?.type);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleRemoveWidget(e: MouseEvent<HTMLOrSVGElement>) {
    setOpen(false);
  }



  function handleAttrValueChange() {
    widgetAttrService.notify(currentSelectedWidget.wid);
  }

  return (
    <div className='ws-component-form-editor flex-this'>
      <div className='form-header flex-row'>
        <label className='flex-this' style={{fontWeight: 'bold'}}>{widgetName}</label>
        <FontAwesomeIcon className='widget-icon' icon={faTrashAlt} onClick={handleOpen} />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h6 id='transition-modal-title'>Are you sure you want to remove this widget?</h6>
            <div>
              <Button size='small' variant='contained' onClick={handleClose}>Cancel</Button>
              <Button size='small' variant='contained' color='primary' onClick={handleRemoveWidget}>OK</Button>
            </div>
          </div>
        </Fade>
      </Modal>
      <div style={{fontSize: '14px'}}>
        {Object.keys(widgetAttrs).map(attrKey => (
          <ComponentFormEditorField onChange={handleAttrValueChange} key={attrKey} widget={currentSelectedWidget} attrKey={attrKey} attrValue={widgetAttrs[attrKey]} blueprint={widgetBlueprint} />
        ))}
      </div>
    </div>
  );
}
