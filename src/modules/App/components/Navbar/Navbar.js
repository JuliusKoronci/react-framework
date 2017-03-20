// @flow
import React, { PropTypes } from 'react';
import { Logo, Link, DropDown } from '../../../../components';
import LogoImage from '../../images/logo-small.png';
import styles from '../../scss/navbar.css';

const Navbar = () => (
  <header className={styles.navBar}>
      <Logo className={styles.logo} image={LogoImage} text="WIXI" showText />
      <nav className={styles.mainNavigation}>
          <Link className={styles.navigationButton}>Login</Link>
          <Link className={styles.navigationButton}>Register</Link>
          <DropDown className={[styles.dropdown, styles.navigationButton].join(' ')} iconName="caret-down" hideOnLeave={false} showOnHover={false}>
              <div className={styles.dropdownContent}>
                  <Link iconName="sign-in" className={styles.navigationButton}>Login</Link>
                  <Link iconName="sign-out" className={styles.navigationButton}>Register</Link>
              </div>
          </DropDown>
      </nav>
  </header>
);

Navbar.displayName  = 'Navbar';
Navbar.propTypes    = {};
Navbar.defaultProps = {};

export default Navbar;
