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
            <h4 className="sub-head" >Break Length</h4>
            <section className="interval-container">
                <button className="button1" onClick={decreaseTimerHandler} >
                    Down
                </button>
                    <p className="interval-length">{props.breakLength}</p>
                <button className="button1" onClick={increaseTimerHandler}>
                    Up
                </button>
            </section>
        </section>
    );
}

export default BreakInterval;