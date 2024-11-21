import React, { useState } from "react";

export default function Pr() {
  const [alphabet, setAlphabet] = useState([]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  const add = () => {
    if (name.trim().length === 0 || title.trim().length === 0) {
      return;
    }

    const newAlpha = { id: alphabet.length + 1, name: name, title: title };
    setAlphabet([...alphabet, newAlpha]);
    setName("");
    setTitle("");
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      add();
    }
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          marginBottom: "30px",
        }}
      >
        <span style={{ marginRight: "10px" }}>작성자:</span>
        <input
          type="text"
          placeholder="작성자"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <span style={{ marginRight: "10px" }}>제목:</span>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <button onClick={add}>작성</button>
      </div>
      <br />
      <select>
        <option value="작성자">작성자</option>
      </select>
      <input type="text" placeholder="검색어" />
      <button>검색</button>
      <br />
      {/* 테이블 헤더 추가 */}
      <div>
        <table
          style={{ width: "80%", margin: "0 auto", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th
                style={{
                  width: "30%",
                  border: "1px solid black",
                  padding: "8px",
                }}
              >
                번호
              </th>
              <th
                style={{
                  width: "35%",
                  border: "1px solid black",
                  padding: "8px",
                }}
              >
                작성자
              </th>
              <th
                style={{
                  width: "30%",
                  border: "1px solid black",
                  padding: "8px",
                }}
              >
                제목
              </th>
            </tr>
          </thead>
        </table>
      </div>
      {/* 데이터 리스트 테이블로 출력 */}
      <div>
        <table
          style={{ width: "80%", margin: "0 auto", borderCollapse: "collapse" }}
        >
          <tbody>
            {alphabet.map((value) => (
              <tr key={value.id}>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid black",
                    padding: "8px",
                  }}
                >
                  {value.id}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid black",
                    padding: "8px",
                  }}
                >
                  {value.title}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid black",
                    padding: "8px",
                  }}
                >
                  {value.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr />
    </div>
  );
}
