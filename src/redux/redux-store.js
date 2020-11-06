import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
const reducer = combineReducers({
    profilePages: profileReducer,
    dialogsPages: dialogsReducer,
    sidebar: sidebarReducer,
    usersPages: usersReducer
});


let store = createStore(reducer);
window.store = store;
export default store;