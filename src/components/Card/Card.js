import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import { toggleCardFavorite } from '../../redux/cardsRedux';

const Card = (props) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button
        onClick={handleSubmit}
        className={clsx(styles.button, props.isFavorite && styles.isActive)}
      >
        <i className={'fa fa-star-o'} />
      </button>
    </li>
  );
};

export default Card;
