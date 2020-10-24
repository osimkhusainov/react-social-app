import React from 'react';
import classes from './Header.module.scss';
const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.header__img} src="https://seeklogo.com/images/M/m-letter-company-logo-E2FADCFF0B-seeklogo.com.png" alt="logo"></img>
        </header>
    )
}
export default Header;