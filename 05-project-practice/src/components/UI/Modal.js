import styles from './Modal.module.css';
import Button from './Button';
import Card from './Card';

const Modal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onClose} />
      <Card className={styles.modal}>
        <h2 className={styles.header}>{props.header}</h2>
        <p className={styles.message}>{props.message}</p>
        <Button type="button" onClick={props.onClose}>
          Close
        </Button>
      </Card>
    </div>
  );
};

export default Modal;
