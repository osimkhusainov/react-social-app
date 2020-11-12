const  SET_AUTH = 'SET_AUTH';

let initialDialog = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state = initialDialog, action) => {
    if(action.type === SET_AUTH){
        return {
            ...state,
            ...action.data,
            isAuth: true
        };
    };
    return state;
};

export const setAuthUserData = (id, email, login) => ({type: SET_AUTH, data: {id, email, login}})
export default authReducer;