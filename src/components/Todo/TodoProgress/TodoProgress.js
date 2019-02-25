import React from 'react';
import './TodoProgress.css';

const todoProgress = (props) => {
  const all = props.items.length;
  const completed = props.items.filter((item) => item.completed).length;
  const percentage = all ? parseInt(completed/all*100): 100;
  return (
    <>
      <p>My Progress:</p>
      <div className="progress TodoProgress">
        <div className="progress-bar"
             role="progressbar"
             aria-valuenow="{percentage}"
             aria-valuemin="0"
             aria-valuemax="100"
             style={{width: percentage+'%'}}>
          {percentage}%
        </div>
      </div>
    </>
  )
};

export default todoProgress;
