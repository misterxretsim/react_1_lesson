import './App.css'
import React from 'react'
import Message from '../Message/Message'
import Loader from '../Loader/Loader'
import Chat from '../Chat/Chat'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import { messages } from '../../data/data'

function App() {
    const [messageList, setMessageList] = React.useState([])
    const [input, setInput] = React.useState('')
    const [robotTyping, setRobotTyping] = React.useState(false)
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

            setRobotTyping(true)
            setMessageList(newMessageList)

            setInput('')
            document.getElementById('input').value = ''

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
                document.getElementById('input').focus()
            }, 3000)

            return () => {
                clearTimeout(timer)
            }
        }
    }

    React.useEffect(() => setMessageList(messages), [])

    const handleInput = React.useCallback((e) => setInput(e.target.value), [])

    const handleEnter = React.useCallback(
        (e) => {
            if (e.key === 'Enter') send()
        },
        [send]
    )

    const handleSend = React.useCallback(() => send(), [send])

    return (
        <div className="App">
            <Chat />
            <div className="App__content">
                <Message messageList={messageList} />
                <Paper component="form" className="App__form">
                    <InputBase
                        id="input"
                        className="App__input"
                        placeholder="Введите текст"
                        onChange={handleInput}
                        disabled={robotTyping}
                        autoComplete="off"
                        autoFocus
                        onKeyDown={handleEnter}
                    />
                    <IconButton
                        aria-label="primary"
                        onClick={handleSend}
                        disabled={!input}
                        color="primary"
                        className="App__btn"
                    >
                        <SendIcon />
                    </IconButton>
                </Paper>
                {robotTyping ? <Loader /> : null}
            </div>
        </div>
    )
}

export default App
