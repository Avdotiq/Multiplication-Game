// library
import React from 'react';
// static
import RIGHT_SVG from '../../assets/image/right.svg';
import ERROR_SVG from '../../assets/image/error.svg';

function ImageResponse(data) {
  const { result } = data;

  if (result !== undefined && result !== null) {
    const src = result === true ? RIGHT_SVG : ERROR_SVG;

    return <img src={src} alt='' />;
  }

  return null;
}

export default ImageResponse;
