import './App.css';
import React from 'react';
import Message from '../Message/Message';
import SendBtn from '../SendBtn/SendBtn';
import Spinner from '../Spinner/Spinner';
import messages from '../../data/messageList';


function App() {

    const [messageList, setMessageList] = React.useState([]);
    const [input, setInput] = React.useState('');
    const [robotTyping, setRobotTyping] = React.useState(false);
    const currTime = (currDate) => ('0' + currDate.getHours()).slice(-2) + ':' + ('0' + currDate.getMinutes()).slice(-2);


    React.useEffect(() => {
        setMessageList(messages)
    }, []);


    const handleInput = React.useCallback((e) => {
        setInput(e.target.value);
    }, []);
    const handleSend = React.useCallback(() => {

        if (input && !robotTyping) {
            const newMessageList = [...messageList, {
                id: new Date().getTime(),
                text: input,
                author: 'Client',
                time: currTime( new Date() )
            }];

            setRobotTyping(true);
            setMessageList(newMessageList);

            setInput('');
            document.getElementById('input').value = '';

            const timer = setTimeout(() => {
                setMessageList([...newMessageList, {
                    id: messageList.length + 1,
                    text: 'Ожидайте ответа оператора',
                    author: 'Robot',
                    time: currTime( new Date() )
                }]);
                setRobotTyping(false);
            }, 3000);

            return () => {
                clearTimeout(timer)
            }
        }
    }, [messageList, input, robotTyping]);

    return (
        <div className="App">
            <div className="App__content">
                { messageList.map((msg) =>
                    <Message key={msg.id} msg={msg}/>
                ) }
                <div className="App__form">
                    <input id="input" onChange={handleInput} disabled={robotTyping} autoComplete="off" />
                    <SendBtn onCustomClick={handleSend} />
                    { robotTyping ? <Spinner /> : null }
                </div>
            </div>
        </div>
    );
}

export default App;
