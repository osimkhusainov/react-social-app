import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
const reducer = combineReducers({
    profilePages: profileReducer,
    dialogsPages: dialogsReducer,
    sidebar: sidebarReducer,
    usersPages: usersReducer,
    auth: authReducer
});


let store = createStore(reducer, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;