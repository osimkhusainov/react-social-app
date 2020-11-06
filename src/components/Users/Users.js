import React from 'react';
import avatarImg from '../../ava/avatar.png';
import { NavLink } from 'react-router-dom';
import './Users.scss';


let Users = (props) => {

        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];

        let path = /profile/ + 2;
        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        };
        return (
            <div>
                <div>
                    {
                        pages.map(p => {
                            return <span onClick={(e) => {props.onPageChanged(p)}} className={props.currentPage === p && "active_usr"}>{p}</span>
                        })
                    }
                </div>
                {
                    props.users.map(u =>
                        <div key={u.id} style={props.isFetching ? {display: "none"} : null}>
                            <span>
                                <NavLink to={path}>
                                    <img className="avatar__img" src={u.photos.small != null ? u.photos.small: avatarImg} alt="avatar"/>
                                </NavLink>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => {props.unfollow(u.id)}}>unfollow</button>
                                        : <button onClick={() => {props.follow(u.id)}}>follow</button>}
                                </div>
                            </span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.live.city'}</div>
                                <div>{'u.live.country'}</div>
                            </span>
                        </div>
                    )
                }
                    <span>
                        <button>
                            SHOW MORE
                        </button>
                    </span>
            </div>
    )
}

export default Users;