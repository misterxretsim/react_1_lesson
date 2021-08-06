import './Message.css'
import React from 'react'
import {
    Paper,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Divider,
} from '@material-ui/core'
import { getImg } from '../../helper'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { chatSelector } from '../../selectors/chat'

export default function Message() {
    const chats = useSelector(chatSelector)
    const { chatId } = useParams()

    return (
        <Paper className="Message" elevation={0}>
            <List>
                {chats
                    .find((el) => el.name === chatId)
                    .messages.map((msg, i) => (
                        <React.Fragment key={msg.id}>
                            {msg.author !== 'Me' ? (
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={msg.author}
                                            src={getImg(msg.author)}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={msg.text}
                                        secondary={msg.time}
                                    />
                                </ListItem>
                            ) : (
                                <ListItem className="Message__me">
                                    <ListItemText
                                        primary={msg.text}
                                        secondary={msg.time}
                                    />
                                    <ListItemAvatar>
                                        <Avatar className="Avatar__me" alt="Me">
                                            Вы
                                        </Avatar>
                                    </ListItemAvatar>
                                </ListItem>
                            )}
                            {chats.find((el) => el.name === chatId).messages
                                .length -
                                1 !==
                            i ? (
                                <Divider component="li" />
                            ) : null}
                        </React.Fragment>
                    ))}
            </List>
        </Paper>
    )
}
