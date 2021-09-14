let initialState = {
    dialogs: [
        {name: "Mom", active: false},
        {name: "Dad", active: true},
        {name: "Brother", active: false},
        {name: "granny", active: false},
        {name: "Friend", active: false},
    ],
    messages: [
        {message: "Hi"},
        {message: "How are you?"},
        {message: "I need help using computer"}
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD-MESSAGE':
            return {
                ...state,
                messages: [...state.messages, {message: action.messageText}],
                newMessageText: ''
            }
        default:
            return state
    }
}

export const addMessageActionCreator = (messageText) => ({type: 'ADD-MESSAGE', messageText})
export default dialogsReducer