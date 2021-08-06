import { ADD_MESSAGE, ADD_CHAT, DELETE_CHAT } from '../actions/chat'
import { chatObject } from '../data/data'
import { currTime } from '../helper'

export default function reducer(state = chatObject, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return state.map((el) => {
                if (action.payload.name === el.name)
                    el.messages = [
                        ...el.messages,
                        {
                            id: el.messages.length + 1,
                            text: action.payload.text,
                            author: action.payload.author,
                            time: currTime(new Date()),
                        },
                    ]
                return el
            })
        case ADD_CHAT:
            return [
                ...state,
                {
                    id: state.length + 1,
                    name: action.payload.name,
                    email: action.payload.email,
                    messages: [],
                },
            ]
        case DELETE_CHAT:
            return state.filter((el) => el.id !== action.payload.id)
        default:
            return state
    }
}
