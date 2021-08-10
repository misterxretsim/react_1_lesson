import { Route, Switch } from 'react-router-dom'
import Chat from '../Chat/Chat'
import AllChats from '../AllChats/AllChats'
import Main from '../Main/Main'
import Covid from '../Covid/Covid'
import Profile from '../Profile/Profile'
import Navigator from '../Navigator/Navigator'
import NotFound from '../NotFound/NotFound'
import ChatNav from '../ChatNav/ChatNav'
import React from 'react'

export default function Routes() {
    const senderRef = React.useRef(null)
    const handleRender = (Component, isChatComponent = false) => {
        return (
            <>
                <Navigator />
                {isChatComponent ? (
                    <div className="Chat">
                        <ChatNav senderRef={senderRef} />
                        <Component senderRef={senderRef} />
                    </div>
                ) : (
                    <Component />
                )}
            </>
        )
    }

    return (
        <>
            <Switch>
                <Route exact path="/" render={() => handleRender(Main)} />
                <Route exact path="/covid" render={() => handleRender(Covid)} />
                <Route path="/profile" render={() => handleRender(Profile)} />
                <Route
                    path="/chats/:chatId"
                    render={() => handleRender(Chat, true)}
                />
                <Route
                    path="/chats"
                    render={() => handleRender(AllChats, true)}
                />
                <Route component={NotFound} />
            </Switch>
        </>
    )
}
