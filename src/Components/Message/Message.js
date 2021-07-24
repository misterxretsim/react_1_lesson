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

export default function Message(props) {
    return (
        <Paper className="Message" elevation={0}>
            <List>
                {props.messageList.map((msg, i) => (
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
                        {props.messageList.length - 1 !== i ? (
                            <Divider component="li" />
                        ) : null}
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    )
}
