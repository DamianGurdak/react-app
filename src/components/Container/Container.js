import styles from './Container.module.scss';

const Container = (props) => {
  return <div className={styles.div}>{props.children}</div>;
};

//to jest błedne
// const Container = ({ children }) => {
//   return <div className={styles.div}>{children}</div>;
// };

export default Container;
