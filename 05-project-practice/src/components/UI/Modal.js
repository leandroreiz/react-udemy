import styles from './Modal.module.css';
import Button from './Button';
import Card from './Card';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const overlay = document.getElementById('overlay-root');

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <h2 className={styles.header}>{props.header}</h2>
      <p className={styles.message}>{props.message}</p>
      <Button type="button" onClick={props.onClose}>
        Close
      </Button>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          header={props.header}
          message={props.message}
          onClose={props.onClose}
        />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default Modal;
