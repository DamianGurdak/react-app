import styles from './Container.module.scss';

const Container = ({ children }) => {
  return <div className={styles.div}>{children}</div>;
};

export default Container;
