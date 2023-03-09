import styles from './Lists.module.scss';
import { useSelector } from 'react-redux';
import { getAllLists } from '../../redux/listsRedux';
import { Link } from 'react-router-dom';
import ListForm from '../ListForm/ListForm';

const Lists = () => {
  const lists = useSelector(getAllLists);

  return (
    <section className={styles.lists}>
      <h2 className={styles.heading}>Browse lists</h2>
      {lists.map((list) => (
        // <Link key={list.id} to='' className={styles.listLink}>
        <Link key={list.id} to={'/list/' + list.id} className={styles.listLink}>
          <h3>{list.title}</h3>
          <p>{list.description}</p>
        </Link>
      ))}
      <ListForm />
    </section>
  );
};

export default Lists;
