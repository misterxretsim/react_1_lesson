import './Message.css';
import React from 'react';


function Message(props) {

    return (
        <div className={props.msg.author === 'Robot' ? "Message Message__robot" : "Message Message__client"}>
            <b className="Message__author">{ props.msg.author === 'Robot' ? "🤖" : "👤" } &nbsp;&nbsp; { props.msg.author }</b>
            <p className="Message__text">{ props.msg.text }</p>
            <p className="Message__time">{ props.msg.time }</p>
        </div>
    );
}

export default Message;
