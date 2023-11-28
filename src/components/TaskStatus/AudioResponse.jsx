// library
import React from 'react';
// static
import ERROR_MP3 from '../../sounds/bal_screech.mp3';
import RIGHT_1_MP3 from '../../sounds/bal_praise1.mp3';
import RIGHT_2_MP3 from '../../sounds/bal_praise2.mp3';
import RIGHT_3_MP3 from '../../sounds/bal_praise3.mp3';
import RIGHT_4_MP3 from '../../sounds/bal_praise4.mp3';
import RIGHT_5_MP3 from '../../sounds/bal_praise5.mp3';

function AudioResponce(data) {
  const { result, isShown } = data;
  const allResonseSrc = [
    RIGHT_1_MP3,
    RIGHT_2_MP3,
    RIGHT_3_MP3,
    RIGHT_4_MP3,
    RIGHT_5_MP3,
  ];
  let responceSrc = result
    ? allResonseSrc[Math.floor(Math.random() * allResonseSrc.length)]
    : ERROR_MP3;

  if (!isShown || result === null) {
    return null;
  }
  return (
    <audio autoPlay>
      <source src={responceSrc} type='audio/mpeg' />
    </audio>
  );
}

export default AudioResponce;
