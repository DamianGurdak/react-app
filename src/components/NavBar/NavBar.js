import styles from './NavBar.module.scss';
import Container from '../Container/Container';
// import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Container>
        <div className={styles.navWrapper}>
          <a href='/'>
            <span className=' fa fa-tasks'></span>
          </a>

          <ul>
            <li>
              <a href='/'>HOME</a>
            </li>

            <li>
              <li>
                <a href='/favorite'>FAVORITE</a>
              </li>
            </li>

            <li>
              <li>
                <a href='/about'>ABOUT</a>
              </li>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
