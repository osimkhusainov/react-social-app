import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePages: {
            postData: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'Hi, how are you', likesCount: 20}
                ],
            newPostData: 'Hi'
        },
        dialogsPages: {
            dialogsData: [
                {id: 1, name: 'Igor'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Osim'},
                {id: 5, name: 'Kris'}
                ],
            messageData: [
                {id: 1, message: 'Hi', name: 'Osim'},
                {id: 2, message: 'How are you?', name: 'Me'},
                {id: 3, message: 'Good', name: 'Osim'}
                ],
            messagePostData: 'Hello'
        },
        sidebar: {
            friendsData: [
                {id: 1, name: 'Osim', img: "https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg" },
                {id: 2, name: 'Andrew', img: "https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/orig" },
                {id: 3, name: 'Lexa', img: "https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg" }
            ]
        }
    },
    _renderMessage() {
        console.log('hu');
    },
    getState(){
        return this._state;
    },

    subscribe(observer)  {
        this._renderMessage = observer;
    },
    dispatch(action) {
        this._state.profilePages = profileReducer(this._state.profilePages, action);
        this._state.dialogsPages = dialogsReducer(this._state.dialogsPages, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._renderMessage(this._state);
    }
}






window.store = store;
// export default store;