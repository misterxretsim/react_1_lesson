import './Message.css'
import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import robotImg from '../../images/robot.png'

function Message(props) {
    return (
        <div className="Message">
            <Paper>
                <List>
                    {props.messageList.map((msg, i) => (
                        <React.Fragment key={msg.id}>
                            {msg.author !== 'Me' ? (
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={msg.author}
                                            src={robotImg}
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
                                        <Avatar
                                            className="Avatar__me"
                                            alt="Me"
                                        >Вы</Avatar>
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
        </div>
    )
}

export default Message
