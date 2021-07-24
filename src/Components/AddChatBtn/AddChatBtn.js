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

export default function AddChatBtn() {
    const [openAddDialog, setOpenAddDialog] = React.useState(false)
    const handleAdd = () => setOpenAddDialog(true)
    const handleCloseDialog = () => setOpenAddDialog(false)
    const handleCloseWithAdd = () => {
        setOpenAddDialog(false)
        alert('Вы создали новый чат!')
    }

    return (
        <>
            <ListItem className="ChatNav__itemAddBtn">
                <IconButton
                    onClick={handleAdd}
                    color="primary"
                    className="ChatNav__addBtn"
                >
                    <AddIcon />
                </IconButton>
            </ListItem>

            <Dialog open={openAddDialog} onClose={handleCloseDialog}>
                <DialogTitle>Создание нового чата</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Для создания нового чата введите данные пользователя
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Отменить
                    </Button>
                    <Button onClick={handleCloseWithAdd} color="primary">
                        Подтвердить
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
