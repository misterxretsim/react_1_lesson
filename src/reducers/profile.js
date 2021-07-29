import { CHANGE_PROFILE_OBJECT } from '../actions/profile'
import { profileObject } from '../data/data'

export default function reducer(state = profileObject, action) {
    switch (action.type) {
        case CHANGE_PROFILE_OBJECT: {
            return action.payload.profileObject
        }
        default:
            return state
    }
}
