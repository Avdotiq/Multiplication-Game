// library
import React from 'react';
// static
import RIGHT_SVG from '../../image/right.svg';
import ERROR_SVG from '../../image/error.svg';

function ImageResponse(data) {
  const { result } = data;
  const src = result === true ? RIGHT_SVG : ERROR_SVG;

  return (
  <> { result !== null ? <img src={src} alt='' /> : null } </>
  )
}

export default ImageResponse;
