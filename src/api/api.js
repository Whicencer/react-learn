import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "b8ec7abf-5ddb-4f14-a017-c570cac048c5"}
})

export const getUsers = (pageNumber = 1) => {
    return instance.get(`users?page=${pageNumber}`)
}
export const toggleFollowUser = (isFollowed, userId) => {
    if(isFollowed) {
        return instance.delete(`follow/${userId}`)
    } else {
        return instance.post(`follow/${userId}`, {})
    }
}
export const authMe = () => {
    return instance.get('auth/me')
}
export const getProfileStatus = (userId) => {
    return instance.get(`profile/status/${userId}`)
}
export const setProfileStatus = (status) => {
    return instance.put(`profile/status`, {status})
}
export const getUserPage = (userId) => {
    return instance.get(`profile/${userId}`)
}
export const loginUser = (data) => {
    return instance.post(`auth/login`, {email: data.email, password: data.password, rememberMe: data.rememberMe})
}
export const logoutUser = () => {
    return instance.delete(`auth/login`)
}