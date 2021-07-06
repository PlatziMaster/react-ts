import React from 'react';

import { TaskModel } from './models/task.model';

interface PropsTask{
  task: TaskModel;
  styles: {
    color: string;
    border: number;
  };
  stylesMenu: {[key: string]: any};
  setUser: Function;
}

const Task = (props: PropsTask) => {
  const { task, setUser } = props;
  return (
    <div>
      <h1>{task.title} - {task.id}</h1>
      <p>{task.completed}</p>
      <button onClick={() => setUser()}></button>
    </div>
  );
}

export default Task;