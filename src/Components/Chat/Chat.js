import './Chat.css'
import React from 'react'
import Message from '../Message/Message'
import Loader from '../Loader/Loader'
import ChatNav from '../ChatNav/ChatNav'
import { IconButton, InputBase, Paper } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import { chats } from '../../data/data'
import { useParams, useLocation } from 'react-router-dom'

export default function Chat() {
    const [messageList, setMessageList] = React.useState([])
    const [input, setInput] = React.useState('')
    const [robotTyping, setRobotTyping] = React.useState(false)
    const { chatId } = useParams()
    const location = useLocation()
    const ref = React.useRef(null)
    const currTime = (currDate) =>
        ('0' + currDate.getHours()).slice(-2) +
        ':' +
        ('0' + currDate.getMinutes()).slice(-2)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const send = () => {
        if (input && !robotTyping) {
            const newMessageList = [
                ...messageList,
                {
                    id: new Date().getTime(),
                    text: input,
                    author: 'Me',
                    time: currTime(new Date()),
                },
            ]

            setMessageList(newMessageList)
            setInput('')

            if (location.pathname === '/chats/Robot') {
                setRobotTyping(true)
                const timer = setTimeout(() => {
                    setMessageList([
                        ...newMessageList,
                        {
                            id: messageList.length + 1,
                            text: 'Ожидайте ответа оператора',
                            author: 'Robot',
                            time: currTime(new Date()),
                        },
                    ])
                    setRobotTyping(false)
                    ref.current.focus()
                }, 3000)

                return () => {
                    clearTimeout(timer)
                }
            }
        }
    }

    React.useEffect(() => {
        switch (chatId) {
            case 'Alexandr':
                setMessageList(chats[1].messages)
                break
            case 'Sarah':
                setMessageList(chats[2].messages)
                break
            case 'Vanya':
                setMessageList(chats[3].messages)
                break
            default:
                setMessageList(chats[0].messages)
                break
        }
    }, [chatId])

    React.useEffect(() => ref.current.focus())

    const handleInput = React.useCallback((e) => setInput(e.target.value), [])
    const handleSend = React.useCallback(() => send(), [send])
    const handleEnter = React.useCallback(
        (e) => {
            if (e.key === 'Enter') send()
        },
        [send]
    )

    return (
        <div className="Chat">
            <ChatNav />
            <div className="Chat__content">
                <Message messageList={messageList} />
                <Paper
                    component="form"
                    elevation={0}
                    className="Chat__form"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <InputBase
                        id="input"
                        value={input}
                        className="Chat__input"
                        placeholder="Введите текст"
                        onChange={handleInput}
                        disabled={robotTyping}
                        autoComplete="off"
                        autoFocus
                        inputRef={ref}
                        onKeyDown={handleEnter}
                    />
                    <IconButton
                        aria-label="primary"
                        onClick={handleSend}
                        disabled={!input}
                        color="primary"
                        className="Chat__btn"
                    >
                        <SendIcon />
                    </IconButton>
                </Paper>
                {robotTyping ? <Loader /> : null}
            </div>
        </div>
    )
}
