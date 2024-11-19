import React, { useState } from "react";

export default function Pr2() {
  const [number, setNumber] = useState(0);

  const onClickEnter = () => {
    setNumber(number + 1);
  };
  const onClickLeave = () => {
    setNumber(number - 2);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onClickEnter}>+ 1</button>
      <button onClick={onClickLeave}>- 2</button>
    </div>
  );
}
