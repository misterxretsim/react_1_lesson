import './Chat.css'
import Message from '../Message/Message'
import Sender from '../Sender/Sender'
import { useSelector } from 'react-redux'
import { chatSelector } from '../../selectors/chat'
import { useParams, useHistory } from 'react-router-dom'

export default function Chat(props) {
    const chats = useSelector(chatSelector)
    const history = useHistory()
    const { chatId } = useParams()
    const chatFilter = () => {
        const filter = chats.find((el) => el.name === chatId)
        if (!filter) history.push('/chats')
        if (!!filter) if (filter.messages.length) return true
        return false
    }

    return (
        <div className="Chat__content">
            {chatFilter() ? <Message /> : null}
            <Sender senderRef={props.senderRef} />
        </div>
    )
}
