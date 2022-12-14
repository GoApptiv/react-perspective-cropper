import React from 'react'
import Canvas from '../lib/Canvas'

const Cropper = React.forwardRef((props, ref) => {
  if (!props.image) {
    return null
  }

  return <Canvas {...props} cropperRef={ref} />
})

export default Cropper
