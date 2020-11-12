import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';
const Header = (props) => {
    return (

        <header className={classes.header}>
            <img className={classes.header__img} src="https://seeklogo.com/images/M/m-letter-company-logo-E2FADCFF0B-seeklogo.com.png" alt="logo"></img>

            <div className={classes.header__auth}>
                {props.isAuth ? props.login : <NavLink className={classes.header__link} to={'/login'}>Login</NavLink>} 
                
            </div>
        </header>
    )
}
export default Header;