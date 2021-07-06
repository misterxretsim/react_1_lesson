import './App.css';

function Message(props) {
    return (
        <div className="Message">
            <p className="msg_text">Check my Message: <b>{props.msg}</b></p>
        </div>
    );
}

export default Message;
