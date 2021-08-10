import './Sender.css'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Loader from '../Loader/Loader'
import { addMessage } from '../../actions/chat'
import { chatPath, isRobotChat } from '../../helper'
import { IconButton, InputBase, Paper } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

export default function Sender(props) {
    const [input, setInput] = React.useState('')
    const [robotTyping, setRobotTyping] = React.useState(false)
    const location = useLocation()
    const dispatch = useDispatch()
    const ref = props.senderRef
    const handleInput = (e) => setInput(e.target.value)
    const handleSend = React.useCallback(
        (e) => {
            if (
                input &&
                !robotTyping &&
                (e.key === 'Enter' || e.key === undefined)
            ) {
                dispatch(addMessage(chatPath(location), input))
                setInput('')
                ref.current.focus()

                if (isRobotChat(location)) {
                    setRobotTyping(true)
                    const timer = setTimeout(() => {
                        setRobotTyping(false)
                        ref.current.focus()
                    }, 3000)

                    return () => {
                        clearTimeout(timer)
                    }
                }
            }
        },
        [dispatch, input, location, ref, robotTyping]
    )

    React.useEffect(() => ref.current.focus(), [ref])

    return (
        <>
            <Paper
                component="form"
                elevation={0}
                className="Sender"
                onSubmit={(e) => e.preventDefault()}
            >
                <InputBase
                    id="input"
                    value={input}
                    className="Sender__input"
                    placeholder="Введите текст"
                    onChange={handleInput}
                    disabled={robotTyping && isRobotChat(location)}
                    autoComplete="off"
                    autoFocus
                    inputRef={ref}
                    onKeyDown={handleSend}
                />
                <IconButton
                    aria-label="primary"
                    onClick={handleSend}
                    disabled={!input}
                    color="primary"
                    className="Sender__btn"
                >
                    <SendIcon />
                </IconButton>
            </Paper>
            {robotTyping && isRobotChat(location) ? <Loader /> : null}
        </>
    )
}
