import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'

let store = {
    _subscriber() {},
    _state: {
        dialogsPage: {
            newMessageText: "",
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
        },
        profilePage: {
            newPostText: "",
            posts: [
                {text: "Hi, this is my first post", likes: "0"},
                {text: "Hi, this is my second post", likes: "1205"}
            ]
        },
        sidebar: {
            friends: [
                {name: "Gabe", avatar: "https://i.gadgets360cdn.com/large/Gabe_Newell_1484763796244.jpg"},
                {name: "Elon", avatar: "https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_0.jpg"},
                {name: "Oleg", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6p6YGPAqjzz9ASMqJO1w_PWr71SjwlddetQ&usqp=CAU"}
            ]
        }
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._subscriber = observer
    },
    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        sidebarReducer(this._state.sidebar, action)
        this._subscriber()
    },
}

export default store

window.store = store