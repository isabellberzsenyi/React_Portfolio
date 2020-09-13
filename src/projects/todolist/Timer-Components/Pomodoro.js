import React from "react";

const Pomodoro = (props) => {
  return (
    <div className="pomodoro">
      <p className="time">
        {props.break ? props.restMinutes : props.workMinutes} :
        {props.seconds < 10 ? ` 0${props.seconds}` : ` ` + props.seconds}
      </p>
      <button className="startTimer" onClick={props.start ? props.pauseTimer : props.startTimer}>
        {props.start ? "Pause" : "Start"}
      </button>
      <button className="restartTimer" onClick={props.restartTimer}>
        Restart
      </button>
    </div>
  );
};

export default Pomodoro;
