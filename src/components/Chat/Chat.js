import './Chat.css'
import Message from '../Message/Message'
import ChatNav from '../ChatNav/ChatNav'
import Sender from '../Sender/Sender'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

export default function Chat() {
    const chats = useSelector((state) => state.chats)
    const history = useHistory()
    const { chatId } = useParams()
    const chatFilter = () => {
        const filter = chats.filter((el) => el.name === chatId)[0]
        if (!!filter) if (filter.messages.length) return true
        if (!chats.find((el) => el.name === chatId)) history.push('/chats')
        return false
    }

    return (
        <div className="Chat">
            <ChatNav />
            <div className="Chat__content">
                {chatFilter() ? <Message /> : null}
                <Sender />
            </div>
        </div>
    )
}
