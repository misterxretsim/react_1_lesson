import { combineReducers, createStore } from 'redux'
import profileReducer from './reducers/profile'
import chatReducer from './reducers/chat'

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
