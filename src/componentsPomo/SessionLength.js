import React from 'react';

function SessionLength(props) {

    const length= props.sessionLength

    function decreaseTimerHandler(){

        if(props.isPlay)
        {
            return;
        }

        if(length<=0)
        {
            return;
        }

        props.onSessionLengthChange(length-1)
    }

    function increaseTimerHandler(){

        if(props.isPlay)
        {
            return;
        }

        props.onSessionLengthChange(length+1)
    }
    
    return (
        <section>
            <h4>Session Length</h4>
            <section className="interval-container">
                <button className="button1" onClick={decreaseTimerHandler} >
                    Down
                </button>
                    <p className="interval-length" >{props.sessionLength}</p>
                <button className="button1" onClick={increaseTimerHandler} >
                    Up
                </button>
            </section>
        </section>
    );
}

export default SessionLength;