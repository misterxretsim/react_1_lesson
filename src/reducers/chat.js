import { CHANGE_CHAT_OBJECT } from '../actions/chat'
import { chatObject } from '../data/data'

export default function reducer(state = chatObject, action) {
    switch (action.type) {
        case CHANGE_CHAT_OBJECT: {
            return action.payload.chatObject
        }
        default:
            return state
    }
}
