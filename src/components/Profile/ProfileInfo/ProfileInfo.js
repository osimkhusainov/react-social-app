import React from 'react';
import './ProfileInfo.scss';

const ProfileInfo = () => {
    return (
        <div className="profile">
            <div>
                <img src="https://s.yimg.com/ny/api/res/1.2/7bbMUDnuJ0DeybIOk_CVzQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/68ead40c4b63a59b3c33c2e01a647f19" alt="avatar" className="profile__img" />
            </div>
            <div className="profile__info">
                <div>Name</div>
                <div>City</div>
                <div>Email</div>
                <div>Etc</div>
            </div>
        </div>
    )
}
export default ProfileInfo;