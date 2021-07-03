import React from 'react';

interface PropsTask{
  title: string;
  completed: boolean;
  styles: {
    color: string;
    border: number;
  };
  stylesMenu: {[key: string]: any};
  setUser: Function;
}

const Task = (props: PropsTask) => {
  const { title, completed } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{completed}</p>
      <button onClick={() => props.setUser()}></button>
    </div>
  );
}

export default Task;