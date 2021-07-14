import './SendBtn.css';
import React from 'react';


function SendBtn(props) {

    const { onCustomClick } = props;

    return (
        <div onClick={ onCustomClick } className="SendBtn">Отправить</div>
    );
}

export default SendBtn;
