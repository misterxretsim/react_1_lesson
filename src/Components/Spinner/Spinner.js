import './Spinner.css';
import React from 'react';


function Spinner() {

    return (
        <div className="Spinner">
            <p className="Spinner__typing">Robot печатает сообщение</p>
            <div className="lds-ellipsis">
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    );
}

export default Spinner;
