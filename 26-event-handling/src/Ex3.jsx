import React, { useState } from "react";

export default function Ex3() {
  const [qhdufk, setQhdufk] = useState("보여라");
  const [text, setText] = useState("안녕하세요");

  const see = () => {
    if (qhdufk === "보여라") {
      setQhdufk("사라져라");
      setText("");
    } else {
      setQhdufk("보여라");
      setText("안녕하세요");
    }
  };

  return (
    <div>
      <button onClick={see}>{qhdufk}</button>
      <p>{text}</p>
    </div>
  );
}

// 해답

// import { useState } from "react";

// const Ex3 = () => {
//   let [display, changeDisplay] = useState(true);

//   const setDisplay = () => {
//     changeDisplay(!display);
//   };

//   return (
//     <>
//       <button onClick={setDisplay}>{display ? "사라져라" : "보여라"}</button>
//       {display && <h4>안녕하세요</h4>}
//     </>
//   );
// };

// export default Ex3;
