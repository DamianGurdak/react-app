import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = (props) => {
  const dispatch = useDispatch();

  const deleteCard = (e) => {
    e.preventDefault();
    dispatch(removeCard(props.id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.cardId));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button
          onClick={handleSubmit}
          className={clsx(styles.button, props.isFavorite && styles.isActive)}
        >
          <i className={'fa fa-star-o'} />
        </button>
        <button onClick={deleteCard} className={styles.button}>
          <i className={'fa fa-trash'} />
        </button>
      </div>
    </li>
  );
};

export default Card;
