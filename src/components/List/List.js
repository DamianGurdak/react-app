import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';

const List = () => {
  const columns = useSelector((state) => state.columns);

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do<span>soon!</span>
        </h2>
      </header>
      <p className={styles.description}>
        Interesting things I want to check out
      </p>
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm />
    </div>
  );

  // return (
  //   <div className={styles.list}>
  //     <header className={styles.header}>
  //       <h2 className={styles.title}>
  //         Things to do<span>soon!</span>
  //       </h2>
  //     </header>
  //     <p className={styles.description}>
  //       Interesting things I want to check out
  //     </p>
  //     <section className={styles.columns}>
  //       {columns.map((column) => (
  //         <Column
  //           key={column.id}
  //           id={column.id}
  //           title={column.title}
  //           icon={column.icon}
  //           cards={column.cards}
  //           addCard={addCard}
  //         />
  //       ))}
  //     </section>
  //     <ColumnForm action={addColumn} />
  //     {/* <Column addCard={addCard} /> */}
  //   </div>
  // );
};

export default List;
