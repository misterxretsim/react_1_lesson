import './ChatNav.css'
import { useState, useEffect } from 'react'
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
import { getImg } from '../../helper'
import { chats } from '../../data/data'
import { useLocation, useHistory } from 'react-router-dom'

export default function ChatNav() {
    const [chatList, setChatList] = useState([])
    const [openAlert, setOpenAlert] = useState(false)
    const [curChatForDel, setCurChatForDel] = useState(null)
    const location = useLocation()
    const history = useHistory()
    const handleClick = (name) => history.push('/chats/' + name)
    const handleSelect = (name) => name === location.pathname.split('/').pop()
    const handleClose = () => setOpenAlert(false)
    const handleDel = (id) => {
        setOpenAlert(true)
        setCurChatForDel(id)
    }
    const handleCloseWithDel = () => {
        setOpenAlert(false)
        setChatList(chatList.filter((chat) => chat.id !== curChatForDel))
    }

    useEffect(() => setChatList(chats), [])

    return (
        <Paper className="ChatNav" elevation={0}>
            <List component="nav" className="ChatNav__nav">
                {chatList.map((chat) => (
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
                            onClick={() => handleClick(chat.name)}
                        />
                        <IconButton
                            onClick={() => handleDel(chat.id)}
                            color="secondary"
                        >
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
                <AddChatBtn />
            </List>

            <Dialog open={openAlert} onClose={handleClose}>
                <DialogTitle>Подтвердите действие</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Вы, действительно, хотите удалить этот чат?
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
