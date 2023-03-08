import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <PageTitle>favorite</PageTitle>
      <p className={styles.subtitle}>Lorem Ipsum.</p>
    </div>
  );
};

export default Favorite;
