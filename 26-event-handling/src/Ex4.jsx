import React, { useState } from "react";
import apple from "./apple.jpeg";
import banana from "./banana.jpeg";
import peach from "./peach.jpeg";

export default function Ex4() {
  const [fruit, setFruit] = useState("");
  const [backgroundColor, setBackground] = useState("white");
  const [color, setColor] = useState("black");
  const [text, setText] = useState("");

  const fruitChange = (e) => {
    setFruit(e.target.value);
  };
  const backgroundColorChange = (e) => {
    setBackground(e.target.value);
  };
  const colorChange = (e) => {
    setColor(e.target.value);
  };
  const textChange = (e) => {
    setText(e.target.value);
  };

  const getFruitImage = () => {
    if (fruit === "apple") {
      return apple;
    } else if (fruit === "banana") {
      return banana;
    } else if (fruit === "peach") {
      return peach;
    }
    return "";
  };

  return (
    <div>
      <label for="fruit">과일:</label>
      <select id="fruit" name="Fruit" value={fruit} onChange={fruitChange}>
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="peach">복숭아</option>
      </select>
      <label for="backgroundColor">배경색 :</label>
      <select
        id="backgroundColor"
        name="BackgroundColor"
        value={backgroundColor}
        onChange={backgroundColorChange}
      >
        <option value="black">검정</option>
        <option value="yellow">노랑</option>
        <option value="blue">파랑</option>
      </select>
      <label for="color">글자색 :</label>
      <select id="color" name="Color" value={color} onChange={colorChange}>
        <option value="black">검정</option>
        <option value="yellow">노랑</option>
        <option value="blue">파랑</option>
        <option value="white">흰색</option>
      </select>
      <br />
      <>내용 :</>
      <input
        type="text"
        placeholder="내용을 입력하세요"
        value={text}
        onChange={textChange}
      />
      <img
        src={getFruitImage()}
        alt={fruit}
        style={{
          width: "200px",
          height: "200px",
          visibility: fruit ? "visible" : "hidden",
        }}
      />
      <p style={{ backgroundColor, color }}>{text}</p>
    </div>
  );
}

// 답은 ExAll 파일에 있음!
