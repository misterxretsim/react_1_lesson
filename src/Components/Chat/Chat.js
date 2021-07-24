import './Chat.css'
import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import getImg from './helper'
import { chats } from '../../data/data'

function Chat() {
    const [chatList, setChatList] = React.useState([])
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    const handleListItemClick = (i) => setSelectedIndex(i)

    React.useEffect(() => setChatList(chats), [])

    return (
        <div className="Chat">
            <Paper>
                <List component="nav">
                    {chatList.map((chat, i) => (
                        <ListItem
                            button
                            key={chat.id}
                            selected={selectedIndex === i}
                            onClick={() => handleListItemClick(i)}
                        >
                            <ListItemAvatar>
                                <Avatar
                                    alt={chat.name}
                                    src={getImg(chat.avatar)}
                                />
                            </ListItemAvatar>
                            <ListItemText primary={chat.name} />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </div>
    )
}

export default Chat
