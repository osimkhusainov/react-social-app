import {usersAPI, followAPI} from '../api/api';
const   FOLLOW = 'FOLLOW',
        UNFOLLOW = 'UNFOLLOW',
        SET_USERS = 'SET_USERS',
        SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
        SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT',
        TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
        TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}
const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return{...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW: 
        return {
            ...state,
            users: state.users.map( u => {
                if(u.id === action.userId){
                    return{...u, followed: false}
                }
                return u;
            })
        }
        case SET_USERS: 
        return{
            ...state,
            users: action.users
        }
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.currentPage
            }
        case SET_USERS_TOTAL_COUNT:
            return{
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING:
            return{
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state;
    }
    // return state;
}


export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING, isFetching, userId});
export default usersReducer;

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        });
    }
}
export const getCurrentPage = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(toggleIsFetching(true));
        usersAPI.getPages(pageNumber, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
        });
    }
}
export const getUnfollowProgress = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        followAPI.unfollow(userId)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingInProgress(false, userId))
        });
    }
}
export const getFollowProgress = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        followAPI.follow(userId)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingInProgress(false, userId))
        });
    }
}