// library
import React from 'react';
import { useSelector } from 'react-redux';
// static
import ImageResponse from './ImageResponse';
import AudioResponce from './AudioResponse';

function TaskStatus(data) {
  const calcState = useSelector((state) => state.calc);
  const currentTask = calcState.currentTask;
  const { task, isProblemSolving } = data;

  return (
      <div>
        <ImageResponse
          result={isProblemSolving}
        />
        <AudioResponce
          isShown={task <= currentTask}
          result={isProblemSolving}
        />
      </div>
  );
}

export default TaskStatus;
