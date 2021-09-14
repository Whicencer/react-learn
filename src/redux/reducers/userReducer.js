import {toggleFollowUser, getProfileStatus, setProfileStatus, getUserPage} from '../../api/api'

const initialState = {
    users: [],
    user: null,
    currentPage: 1,
    posts: [
        {text: "Hi, this is my first post"},
        {text: "Hi, this is my second post"}
    ],
    followingInProcess: [],
    status: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET-USERS':
            return {
                ...state,
                users: [...action.users]
            }
        case 'SET-USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {text: action.postText}],
                newPostText: ''
            }
        case 'TOGGLE-FOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user
                })
            }
        case 'TOGGLE-FOLLOW-PROGRESS':
            return {
                ...state,
                followingInProcess: action.followProcess ? [...state.followingInProcess, action.userId] : state.followingInProcess.filter(id => id !== action.userId)
            }
        case 'GET-USER-STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'CHANGE-USER-STATUS':
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const setUsers = (users) => ({type: 'SET-USERS', users})
export const setUser = (user) => ({type: 'SET-USER', user})
export const setTotalPages = (totalPages) => ({type: 'SET-TOTAL-PAGES', totalPages})
export const setCurrentPage = (currentPage) => ({type: 'SET-CURRENT-PAGE', currentPage})
export const addPost = (postText) => ({type: 'ADD-POST', postText})
export const toggleFollowSuccess = (userId) => ({type: 'TOGGLE-FOLLOW', userId})
export const toggleFollowProcess = (followProcess, userId) => ({type: 'TOGGLE-FOLLOW-PROGRESS', followProcess, userId})
export const getUserStatus = (status) => ({type: 'GET-USER-STATUS', status})
export const changeStatus = (status) => ({type: 'CHANGE-USER-STATUS', status})

export const toggleFollow = (user) => {
    return (dispatch) => {
        dispatch(toggleFollowProcess(true, user.id))
        toggleFollowUser(user.followed, user.id)
            .then(response => {
                    if(response.data.resultCode === 0) {
                        dispatch(toggleFollowSuccess(user.id))
                    }
                    dispatch(toggleFollowProcess(false, user.id))
            })
    }
}
export const getStatus = (userId) => (dispatch) => {
    getProfileStatus(userId)
    .then(response => {
            dispatch(getUserStatus(response.data))
        })
}
export const setStatus = (status) => (dispatch) => {
    setProfileStatus(status)
    .then(() => {
            dispatch(changeStatus(status))
        })
}
export const getUser = (userId) => (dispatch) => {
    getUserPage(userId)
        .then(response => {
            dispatch(setUser(response.data))
        })
}

export default userReducer