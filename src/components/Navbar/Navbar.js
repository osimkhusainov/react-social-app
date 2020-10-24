import React from 'react';
import FriendItem from './../Friends/FriendsItem/FriendsItem';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import './Navbar.scss';
const Navbar = (props) => {
    let state = props.store.getState();
    const friendElement = state.sidebar.friendsData.map( friend => <FriendItem name={friend.name} id={friend.id} img={friend.img} />);
    return (
        <nav className="nav">
            <ul className="nav__ul">
                <li className="nav__item nav__active"><NavLink className="nav__link" to="/profile">Profile</NavLink></li>
                <li className="nav__item"><NavLink className="nav__link" to="/dialogs">Messages</NavLink></li>
                <li className="nav__item"><NavLink className="nav__link" to="/news">News</NavLink></li>
                <li className="nav__item"><NavLink className="nav__link" to="/music">Music</NavLink></li>
                <li className="nav__item"><NavLink className="nav__link" to="/settings">Settings</NavLink></li>
                <li className="nav__item"><NavLink className="nav__link" to="/friends">Friends</NavLink>{friendElement}</li>
            </ul>
        </nav>
    )
}
export default Navbar