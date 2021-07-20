import man from '../../images/man.png'
import robot from '../../images/robot.png'
import woman from '../../images/woman.jpeg'
import mustache from '../../images/mustache.jpeg'

const getImg = (img) => {
    switch (img) {
        case 'man':
            return man
        case 'robot':
            return robot
        case 'woman':
            return woman
        case 'mustache':
            return mustache
        default:
            break
    }
}

export default getImg
