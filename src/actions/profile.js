export const CHANGE_PROFILE_OBJECT = 'PROFILE::CHANGE_PROFILE_OBJ'

export const changeProfileObject = (profileObject) => ({
    type: CHANGE_PROFILE_OBJECT,
    payload: {
        profileObject,
    },
})
