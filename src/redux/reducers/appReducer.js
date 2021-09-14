import {setUser} from './authReducer'

const SET_INITIALIZED = 'SET-INITIALIZED'
const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: SET_INITIALIZED})
export const initializeApp = () => (dispatch) => {
    const promise = dispatch(setUser())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer