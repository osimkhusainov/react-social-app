import React from 'react';
import './../Friends.scss'
import { NavLink } from 'react-router-dom';

const FriendItem = ({name, img, id}) => {
    let path = /friends/ + id;
    return (
        <div className="friends">
            <NavLink to={path} className="friends__link">
                <div className="friends__block">
                    <img className="friends__img" src={img} alt="avatar" />
                    <div className="friends__name">{name}</div>
                </div>
            </NavLink>
        </div>
    )
}
export default FriendItem;