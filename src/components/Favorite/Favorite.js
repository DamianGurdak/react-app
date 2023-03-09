import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

import { getFavoriteCard } from '../../redux/store';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCard);

  if (favoriteCards.length === 0) {
    return (
      <div className={styles.favorite}>
        <PageTitle>No cards...</PageTitle>
      </div>
    );
  }

  return (
    <div className={styles.favorite}>
      <PageTitle>favorite</PageTitle>
      {/* <p className={styles.subtitle}>Lorem Ipsum.</p> */}
      <div className={styles.columnWrapper}>
        <div className={styles.column}>
          <ul className={styles.cards}>
            {favoriteCards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                isFavorite={card.isFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
