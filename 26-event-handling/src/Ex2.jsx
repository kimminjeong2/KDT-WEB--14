import React, { useState } from "react";

export default function Ex2() {
  const [color, setColor] = useState("검정색 글씨");
  const [textColor, setTextColor] = useState("black");

  const red = () => {
    setColor("빨간색 글씨");
    setTextColor("red");
  };
  const blue = () => {
    setColor("파란색 글씨");
    setTextColor("blue");
  };
  return (
    <div>
      <h2 style={{ color: textColor }}>{color}</h2>
      <button onClick={red}>빨간색 글씨</button>
      <button onClick={blue}>파란색 글씨</button>
    </div>
  );
}

// 해답

// import { useState } from "react";

// const Ex2 = () => {
//   let [textcolor, changeColor] = useState({ color: "black", text: "검정색" });

//   const setColor = (color, obj) => {
//     changeColor({ color: color, text: obj.innerText });
//   };

//   return (
//     <>
//       <h4 style={{ color: textcolor.color }}>{textcolor.text} 글씨</h4>
//       <button
//         onClick={(e) => {
//           setColor("red", e.target);
//         }}
//       >
//         빨간색
//       </button>
//       <button
//         onClick={(e) => {
//           setColor("blue", e.target);
//         }}
//       >
//         파란색
//       </button>
//     </>
//   );
// };

// export default Ex2;
