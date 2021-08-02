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
import { useDispatch, useSelector } from 'react-redux'
import { changeProfileObject } from '../../actions/profile'
import { Edit, Save } from '@material-ui/icons'

export default function Profile() {
    const { name, email, pass, gender, birthdate } = useSelector(
        (state) => state.profile
    )
    const dispatch = useDispatch()
    const [profile, setProfile] = useState({
        name,
        email,
        pass,
        gender,
        birthdate,
    })
    const [isEdit, setIsEdit] = useState(false)

    const handleName = (e) => setProfileObj({ name: e.target.value })
    const handleEmail = (e) => setProfileObj({ email: e.target.value })
    const handlePass = (e) => setProfileObj({ pass: e.target.value })
    const handleGender = (e) => setProfileObj({ gender: e.target.value })
    const handleBirthdate = (e) => setProfileObj({ birthdate: e.target.value })

    const setProfileObj = (obj) =>
        setProfile({
            name: obj.name ? obj.name : profile.name,
            email: obj.email ? obj.email : profile.email,
            pass: obj.pass ? obj.pass : profile.pass,
            gender: obj.gender ? obj.gender : profile.gender,
            birthdate: obj.birthdate ? obj.birthdate : profile.birthdate,
        })

    const handleClick = () => {
        if (isEdit) dispatch(changeProfileObject(profile))
        setIsEdit(!isEdit)
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
                <RadioGroup value={profile.gender} onChange={handleGender}>
                    <FormControlLabel
                        value="male"
                        disabled={!isEdit}
                        control={<Radio className="Profile__radio" />}
                        label="Мужчина"
                    />
                    <FormControlLabel
                        value="female"
                        disabled={!isEdit}
                        control={<Radio className="Profile__radio" />}
                        label="Женщина"
                    />
                    <FormControlLabel
                        value="other"
                        disabled={!isEdit}
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
                    disabled={!isEdit}
                    autoComplete="off"
                    value={profile.birthdate}
                    type="date"
                    onChange={handleBirthdate}
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
                    disabled={!isEdit}
                    autoComplete="off"
                    value={profile.name}
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
                    disabled={!isEdit}
                    autoComplete="off"
                    value={profile.email}
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
                    disabled={!isEdit}
                    type="password"
                    autoComplete="off"
                    value={profile.pass}
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
