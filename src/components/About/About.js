import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <PageTitle>about</PageTitle>
      <p className={styles.subtitle}>Lorem Ipsum.</p>
    </div>
  );
};

export default About;
