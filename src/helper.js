import man from './images/man.png'
import robot from './images/robot.png'
import woman from './images/woman.jpeg'
import mustache from './images/mustache.jpeg'
import { regExEmail, regExDB } from './data/data'

export const chatPath = (arg) => arg.pathname.split('/chats/').pop()
export const isRobotChat = (arg) => chatPath(arg) === 'Robot'
export const validateEmail = (val) =>
    !regExEmail.test(String(val).toLowerCase())
export const validateBD = (val) => {
    console.log(val)
    console.log(!regExDB.test(String(val).toLowerCase()))
    console.log(val.length)
    console.log(!regExDB.test(String(val).toLowerCase()) && val.length === 10)
    if (val.length === 10) {
        return !regExDB.test(String(val).toLowerCase())
    } else {
        return true
    }
}
export const isExist = (arg) => typeof arg === 'string'
export const textForDelChat = (chats, id) => {
    const chat = chats.find((el) => el.id === id)
    if (!!chat)
        return 'Вы, действительно, хотите удалить чат с ' + chat.name + '?'
    else return 'Вы, действительно, хотите удалить данный чат?'
}
export const getImg = (author) => {
    switch (author) {
        case 'Alexandr':
            return man
        case 'Robot':
            return robot
        case 'Sarah':
            return woman
        case 'Vanya':
            return mustache
        default:
            break
    }
}
export const currTime = (currDate) =>
    ('0' + currDate.getHours()).slice(-2) +
    ':' +
    ('0' + currDate.getMinutes()).slice(-2)
export const messageList = (chats, id) =>
    chats.find((el) => el.name === id).messages
