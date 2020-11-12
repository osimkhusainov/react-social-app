import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import './Profile.scss';



const Profile = (props) => {
    return (
        <div>
            <div>
                <img src ="https://www.klaviyo.com/wp-content/uploads/2016/09/abstract-background-1024x273.jpg" alt="bcg" className="content__img" />
            </div>
        <div className="profile_post">
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />

        </div>
        </div>
    )
}

export default Profile;