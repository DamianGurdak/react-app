import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const CardForm = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.action({ title }, props.columnId);
    dispatch({
      type: 'ADD_CARD',
      payload: { title, columnId: props.columnId },
    });
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;
