import { Route, Switch } from 'react-router-dom'
import Chat from '../Chat/Chat'
import AllChats from '../AllChats/AllChats'
import Main from '../Main/Main'
import Profile from '../Profile/Profile'
import Navigator from '../Navigator/Navigator'
import NotFound from '../NotFound/NotFound'

export default function Routes() {
    const handleRender = (Component) => {
        return (
            <>
                <Navigator />
                <Component />
            </>
        )
    }

    return (
        <>
            <Switch>
                <Route exact path="/" render={() => handleRender(Main)} />
                <Route path="/profile" render={() => handleRender(Profile)} />
                <Route
                    path="/chats/:chatId"
                    render={() => handleRender(Chat)}
                />
                <Route path="/chats" render={() => handleRender(AllChats)} />
                <Route component={NotFound} />
            </Switch>
        </>
    )
}
