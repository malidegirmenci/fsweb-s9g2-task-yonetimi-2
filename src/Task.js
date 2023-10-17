import React from "react";
import { formatDistanceToNow, differenceInDays  } from "date-fns";
import { tr } from "date-fns/locale";


const Task = ({ taskObj, onComplete }) => {
  const remainingTime = formatDistanceToNow(new Date(taskObj.deadline),{addSuffix:true, locale:tr, includeSeconds:true} )
  let nowDay = Date.now()
  const diffDays = differenceInDays(new Date(taskObj.deadline) ,nowDay)
  console.log(diffDays)
  let bgColor = "";
  console.log(remainingTime)
  if(diffDays > 2){
    bgColor = "bg-blue-400"
  }else{
    bgColor = "bg-red-400"
  }
  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">son teslim: <span className={bgColor}>{remainingTime}</span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
