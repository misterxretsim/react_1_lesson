import man from './images/man.png'
import robot from './images/robot.png'
import woman from './images/woman.jpeg'
import mustache from './images/mustache.jpeg'

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
