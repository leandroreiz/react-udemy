import React from 'react';

// 1. create a new component called UserOutput
// 2. UserOutput should hold two paragraphs
export default function UserOutput(props) {
  // 10. add inline style to my components
  const style = {
    fontWeight: 'bold',
    color: '#4775bf'
  }

  return (
    <div>
      <p>Lorem ipsum dolor sit amet <span style={style}>{props.userName}</span>.</p>
      <p>Integer fringilla dignissim ornare.</p>
      <hr />
    </div>
  );
}
