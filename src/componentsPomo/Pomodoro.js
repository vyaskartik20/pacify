import React from 'react';
import './App.css';
import BreakInterval from './BreakInterval';
import SessionLength from './SessionLength';
import Timer from './Timer';
import Grid from '@material-ui/core/Grid';

class Pomodoro extends React.Component {
  constructor() {
    super();

    this.onBreakIntervalChange = this.onBreakIntervalChange.bind(this);
    this.onSessionLengthChange = this.onSessionLengthChange.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this)
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this)


    this.state={
      breakLength : 5,
      sessionLength : 25,
      timerMinute : 25,
      isPlay: false
    }
  }

  onBreakIntervalChange(newInterval){
    this.setState({
      breakLength : newInterval
    })
  }

  onSessionLengthChange(newLength){
    
    this.setState({
      sessionLength : newLength,
      timerMinute : newLength
    })
  }

  onReset(){
    this.setState({
      breakLength: 5,
      sessionLength : 25,
      timerMinute : 25
    })
  }

  onUpdateTimerMinute(){
    this.setState((prevState) =>{
      return {
        timerMinute:prevState.timerMinute -1
      }
    })
  }

  onToggleInterval(isSession){
    if(isSession){
      this.setState({
        timerMinute : this.state.sessionLength
      })
    }
    else {
      this.setState({
        timerMinute: this.state.breakLength
      })
    }
  }

  onPlayStopTimer(isPlay){
    this.setState({
      isPlay : isPlay
    })
  }



  render(){
    return (
      <main>  

        {/* <Grid container > */}
          
          {/* <Grid item xs={12} sm={8} md={8}> */}
            <h2>Pomodoro Timer</h2>
            <section className="interval-length-container" >
              <BreakInterval 
                isPlay={this.state.isPlay}
                breakLength={this.state.breakLength} 
                onBreakIntervalChange= {this.onBreakIntervalChange} 
              />
              <SessionLength 
                isPlay={this.state.isPlay}
                sessionLength={this.state.sessionLength} 
                onSessionLengthChange= {this.onSessionLengthChange} 
              />
            </section>
            <section className="timer-section" >
            <Timer 
              // isPlay={this.state.isPlay}
              playStopTimer = {this.onPlayStopTimer}
              timerMinute={this.state.timerMinute} 
              onResetTimer={this.onReset}
              updateTimerMinute = {this.onUpdateTimerMinute}
              toggleInterval = {this.onToggleInterval}
            /> 
            </section>
          {/* </Grid> */}
          {/* <Grid item xs={false} sm={4} md={4} /> */}
        {/* </Grid> */}
      </main>
    );
  }
}
  

export default Pomodoro;
