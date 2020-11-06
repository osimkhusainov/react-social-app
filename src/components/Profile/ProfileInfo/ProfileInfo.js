import React from 'react';
import Preloader from '../../Preloader';
import './ProfileInfo.scss';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div className="profile">
            <div>

                <img src={props.profile.photos.large} alt="avatar" className="profile__img" />
            </div>

            <div className="profile__info">
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <a href="vk.com">{props.profile.contacts.github}</a>
                <div>
                    <div>Работа:</div>
                    {props.profile.lookingForAJobDescription}
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;