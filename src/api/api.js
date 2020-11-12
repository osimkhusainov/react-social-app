import * as axios from 'axios';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "336d7aa4-1452-4357-b820-543af61173fb"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 1){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data;
                })
    },
    getPages(pageNumber = 1, pageSize = 1){
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
    },
    getProfile(){
        return instance.get('profile/')
        .then(response => {
            return response.data;
        })
    }
}

export const authAPI = {
    getAuth(){
        return instance.get('auth/me')
                .then(response => {
                    return response.data;
                })
    },
}

export const followAPI = {
    follow(userId){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}