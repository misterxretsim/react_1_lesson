import './AddChatBtn.css'
import {
    ListItem,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    IconButton,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeChatObject } from '../../actions/chat'
import { reg } from '../../data/data'

export default function AddChatBtn() {
    const [openAddDialog, setOpenAddDialog] = React.useState(false)
    const [validationEmail, setValidationEmail] = React.useState(true)
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const ref = React.useRef(null)
    const dispatch = useDispatch()
    const history = useHistory()
    const chats = useSelector((state) => state.chats)

    const handleName = (e) => setName(e.target.value)
    const handleEmail = (e) => {
        setEmail(e.target.value)
        setValidationEmail(!reg.test(String(e.target.value).toLowerCase()))

    }
    const handleClose = () => setOpenAddDialog(false)
    const handleOpen = () => {
        setOpenAddDialog(true)
        setName('')
        setEmail('')
        setValidationEmail(true)
    }
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            ref.current.focus()
        }
    }
    const handleAddChat = React.useCallback(() => {
        if (validationEmail < 1 && !name.length < 1) {
            handleClose()
            dispatch(
                changeChatObject([
                    ...chats,
                    {
                        id: new Date().getTime(),
                        name: name,
                        email: email,
                        messages: [],
                    },
                ])
            )
            history.push('/chats/' + name)
        }
    }, [chats, dispatch, email, history, name, validationEmail])

    return (
        <>
            <ListItem className="ChatNav__itemAddBtn">
                <IconButton
                    onClick={handleOpen}
                    color="primary"
                    className="ChatNav__addBtn"
                >
                    <AddIcon />
                </IconButton>
            </ListItem>

            <Dialog open={openAddDialog} onClose={handleClose}>
                <DialogTitle>Создание нового чата</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Для создания нового чата введите данные пользователя
                    </DialogContentText>
                    <TextField
                        autoFocus
                        error={name.length < 1}
                        margin="dense"
                        id="name"
                        label="Имя"
                        type="text"
                        fullWidth
                        value={name}
                        onChange={handleName}
                        autoComplete="off"
                        onKeyDown={handleEnter}
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={handleEmail}
                        autoComplete="off"
                        inputRef={ref}
                        error={validationEmail}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отменить
                    </Button>
                    <Button onClick={handleAddChat} color="primary">
                        Подтвердить
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}