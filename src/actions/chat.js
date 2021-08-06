export const ADD_MESSAGE = 'CHAT::ADD_MESSAGE'
export const ADD_CHAT = 'CHAT::ADD_CHAT'
export const DELETE_CHAT = 'CHAT::DELETE_CHAT'

export const addMessage = (name, text) => {
    return (dispatch) => {
        dispatch({
            type: ADD_MESSAGE,
            payload: {
                name,
                text,
                author: 'Me',
            },
        })
        if (name === 'Robot')
            setTimeout(
                () =>
                    dispatch({
                        type: ADD_MESSAGE,
                        payload: {
                            name: 'Robot',
                            text: 'Ожидайте ответа оператора',
                            author: 'Robot',
                        },
                    }),
                3000
            )
    }
}
export const addChat = (name, email) => ({
    type: ADD_CHAT,
    payload: {
        name,
        email,
    },
})
export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    payload: {
        id,
    },
})
