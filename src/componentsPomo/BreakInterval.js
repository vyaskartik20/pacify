import React from 'react';

function BreakInterval(props) {
    const length = props.breakLength

    function decreaseTimerHandler(){

        if(props.isPlay)
        {
            return;
        }

        if(length<=0)
        {
            return;
        }

        props.onBreakIntervalChange(length-1)
    }

    function increaseTimerHandler(){

        if(props.isPlay)
        {
            return;
        }

        props.onBreakIntervalChange(length+1)
    }
    
    return (
        <section>
            <h4>Break Length</h4>
            <section className="interval-container">
                <button onClick={decreaseTimerHandler} >
                    Down
                </button>
                    <p className="interval-length">{props.breakLength}</p>
                <button onClick={increaseTimerHandler}>
                    Up
                </button>
            </section>
        </section>
    );
}

export default BreakInterval;