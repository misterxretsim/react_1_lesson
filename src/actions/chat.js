export const CHANGE_CHAT_OBJECT = 'PROFILE::CHANGE_CHAT_OBJECT'

export const changeChatObject = (chatObject) => {
    return {
        type: CHANGE_CHAT_OBJECT,
        payload: {
            chatObject,
        },
    }
}