import React from 'react';
import './../Dialogs.scss';
import {NavLink} from 'react-router-dom';

const DialogItem = ({name, id}) => {
    let path = /dialogs/ + id;
    return (
        <div className="dialogs__item dialogs__item-active">
          <NavLink to={path} className="dialogs__link dialogs__link-active">
              <div className="dialogs__user">
                <img className="dialogs__ava" src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2"></img>
                <div className="dialogs__uname">{name}</div>
              </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;