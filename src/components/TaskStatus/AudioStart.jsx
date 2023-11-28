// library
import React, { useEffect, useState } from 'react';
// static
import PROBLEM_1 from '../../sounds/bal_general_problem1.mp3';
import PROBLEM_2 from '../../sounds/bal_general_problem2.mp3';
import PROBLEM_3 from '../../sounds/bal_general_problem3.mp3';

function AudioStart({ data }) {
  const allProblemsSrc = [PROBLEM_1, PROBLEM_2, PROBLEM_3];
  const [play, setPlay] = useState(true);

  const setSrc = () => {
    return allProblemsSrc[data];
  };

  const setTimeoutOnAudio = () => {
    setPlay(false);
    setTimeout(() => {
      setPlay(true);
    }, 3300);
  };

  useEffect(() => {
    if (data >= 1) {
      // timeout need after first problem, it help to finish AudioResponce
      // and start AudioStart without sticking sound together
      setTimeoutOnAudio();
    }
  }, [data]);

  return (
    <>
      {play ? (
        <audio autoPlay>
          <source src={setSrc()} type='audio/mpeg' />
        </audio>
      ) : null}
    </>
  );
}

export default AudioStart;
