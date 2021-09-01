import React, { useEffect, useRef } from 'react'

const Pointer: React.FC<any> = ({axis}) => {

  const pointerRef = useRef(null);

  const movePointer = () => {
    const el:any = pointerRef.current;
    console.log(el);
    
    el.style.left = `${axis.x - 50}px`;
    el.style.top = `${axis.y - 50}px`;
  }

  useEffect(() => {
    movePointer();
  }, [axis.x, axis.y])

  return (
    <div ref={pointerRef} className="pointer"></div>
  )
}

export default Pointer
