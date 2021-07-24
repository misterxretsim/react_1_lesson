import './Profile.css'
import { useState } from 'react'
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    Typography,
    Button,
    Divider,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@material-ui/core'
import { Edit, Save } from '@material-ui/icons'

export default function Profile() {
    const [isEdit, setIsEdit] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [name, setName] = useState('Nikolay')
    const [email, setEmail] = useState('kolya@mail.ru')
    const [pass, setPass] = useState('qwerty123')
    const [gender, setGender] = useState('male')
    const [date, setDate] = useState('2017-05-24')

    const handleName = (e) => setName(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePass = (e) => setPass(e.target.value)
    const handleGender = (e) => setGender(e.target.value)
    const handleDate = (e) => setDate(e.target.value)
    const handleClick = () => {
        setIsEdit(!isEdit)
        setDisabled(!disabled)
    }

    return (
        <Paper className="Profile" elevation={0} component="form">
            <Typography variant="h4" component="h1" className="Profile__header">
                Ваш профиль
            </Typography>
            <Divider />
            {isEdit ? (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                    className="Profile__saveBtn Profile__btn"
                    startIcon={<Save />}
                >
                    Сохранить
                </Button>
            ) : (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                    className="Profile__editBtn Profile__btn"
                    startIcon={<Edit />}
                >
                    Редактировать
                </Button>
            )}
            <br />
            <FormControl component="fieldset">
                <FormLabel component="legend" className="Profile__radioLabel">
                    Гендер
                </FormLabel>
                <RadioGroup value={gender} onChange={handleGender}>
                    <FormControlLabel
                        value="male"
                        disabled={disabled}
                        control={<Radio className="Profile__radio" />}
                        label="Мужчина"
                    />
                    <FormControlLabel
                        value="female"
                        disabled={disabled}
                        control={<Radio className="Profile__radio" />}
                        label="Женщина"
                    />
                    <FormControlLabel
                        value="other"
                        disabled={disabled}
                        control={<Radio className="Profile__radio" />}
                        label="Другое"
                    />
                </RadioGroup>
            </FormControl>
            <FormControl
                fullWidth
                variant="outlined"
                className="Profile__input"
            >
                <InputLabel htmlFor="date-input">Дата рождения</InputLabel>
                <OutlinedInput
                    id="date-input"
                    disabled={disabled}
                    autoComplete="off"
                    value={date}
                    type="date"
                    onChange={handleDate}
                    startAdornment={
                        <InputAdornment position="start">🗓</InputAdornment>
                    }
                    labelWidth={120}
                />
            </FormControl>
            <FormControl
                fullWidth
                variant="outlined"
                className="Profile__input"
            >
                <InputLabel htmlFor="name-input">Имя</InputLabel>
                <OutlinedInput
                    id="name-input"
                    disabled={disabled}
                    autoComplete="off"
                    value={name}
                    onChange={handleName}
                    startAdornment={
                        <InputAdornment position="start">👤</InputAdornment>
                    }
                    labelWidth={34}
                />
            </FormControl>
            <FormControl
                fullWidth
                variant="outlined"
                className="Profile__input"
            >
                <InputLabel htmlFor="email-input">Email</InputLabel>
                <OutlinedInput
                    id="email-input"
                    disabled={disabled}
                    autoComplete="off"
                    value={email}
                    onChange={handleEmail}
                    startAdornment={
                        <InputAdornment position="start">＠</InputAdornment>
                    }
                    labelWidth={42}
                />
            </FormControl>
            <FormControl
                fullWidth
                variant="outlined"
                className="Profile__input"
            >
                <InputLabel htmlFor="pass-input">Пароль</InputLabel>
                <OutlinedInput
                    id="pass-input"
                    disabled={disabled}
                    type="password"
                    autoComplete="off"
                    value={pass}
                    onChange={handlePass}
                    startAdornment={
                        <InputAdornment position="start">🔒</InputAdornment>
                    }
                    labelWidth={60}
                />
            </FormControl>
        </Paper>
    )
}
