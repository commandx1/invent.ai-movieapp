import { NavLink } from 'react-router-dom';

import Container from '@mui/material/Container';

import Logo from 'components/logo';

import styles from './navbar.module.scss';

const Navbar = () => (
    <header className={styles.navHeader}>
        <Container>
            <Logo />
            <ul className={styles.navList}>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? styles.isActive : '')} to='/'>
                            Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? styles.isActive : '')} to='/popular'>
                            Popular
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? styles.isActive : '')} to='/new-releases'>
                            New Releases
                    </NavLink>
                </li>
            </ul>
        </Container>
    </header>
);

export default Navbar;
