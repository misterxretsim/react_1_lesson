import './ChatNav.css'
import { useState } from 'react'
import AddChatBtn from '../AddChatBtn/AddChatBtn'
import {
    Paper,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { getImg, chatPath, textForDelChat } from '../../helper'
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteChat } from '../../actions/chat'
import { chatSelector } from '../../selectors/chat'

export default function ChatNav(props) {
    const [open, setOpen] = useState(false)
    const [curChatIdForDel, setCurChatIdForDel] = useState(null)
    const dispatch = useDispatch()
    const chats = useSelector(chatSelector)
    const location = useLocation()
    const history = useHistory()
    const ref = props.senderRef

    const handleClick = (name) => {
        history.push('/chats/' + name)
        if (ref.current) ref.current.focus()
    }
    const handleSelect = (name) => name === chatPath(location)
    const handleClose = () => {
        setOpen(false)
        setCurChatIdForDel(null)
    }
    const handleDel = (id) => {
        setOpen(true)
        setCurChatIdForDel(id)
    }
    const handleCloseWithDel = () => {
        setOpen(false)
        if (curChatIdForDel) {
            dispatch(deleteChat(curChatIdForDel))
        }
    }

    return (
        <Paper className="ChatNav" elevation={0}>
            <List component="nav" className="ChatNav__nav">
                {chats.map((chat) => (
                    <ListItem
                        key={chat.id}
                        selected={handleSelect(chat.name)}
                        className="ChatNav__item"
                    >
                        <ListItemAvatar onClick={() => handleClick(chat.name)}>
                            <Avatar alt={chat.name} src={getImg(chat.name)} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={chat.name}
                            className="ChatNav__itemText"
                            onClick={() => handleClick(chat.name)}
                        />
                        {chat.name !== 'Robot' ? (
                            <IconButton
                                onClick={() => handleDel(chat.id)}
                                color="secondary"
                            >
                                <DeleteIcon />
                            </IconButton>
                        ) : null}
                    </ListItem>
                ))}
                <AddChatBtn />
            </List>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Подтвердите действие</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {textForDelChat(chats, curChatIdForDel)}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отменить
                    </Button>
                    <Button onClick={handleCloseWithDel} color="primary">
                        Подтвердить
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    )
}
