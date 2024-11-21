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

// 해답

// import React, { useState } from "react";

// export default function Ex3() {
//   const [inputWriter, setInputWriter] = useState("");
//   const [inputTitle, setInputTitle] = useState("");
//   const [comment, setComment] = useState([
//     {
//       writer: "민수",
//       title: "안녕",
//     },
//   ]);
//   const [inputSearch, setInputSearch] = useState("");
//   const [searchType, setSearchType] = useState("writer");
//   const [result, setResult] = useState([]);

//   const addComment = () => {
//     const newComment = {
//       writer: inputWriter,
//       title: inputTitle,
//     };

//     setComment([...comment, newComment]);
//     setInputWriter("");
//     setInputTitle("");
//   };

//   const searchComment = () => {
//     const searchResult = comment.filter((value) => {
//       if (value[searchType].includes(inputSearch)) return value;
//       else return null;
//     });

//     setResult(searchResult);
//     setInputSearch("");
//   };
//   return (
//     <div>
//       <form>
//         <label htmlFor="writer">작성자 : </label>
//         <input
//           type="text"
//           id="writer"
//           value={inputWriter}
//           onChange={(e) => setInputWriter(e.target.value)}
//         />
//         <label htmlFor="title">제목 : </label>
//         <input
//           type="text"
//           id="title"
//           value={inputTitle}
//           onChange={(e) => setInputTitle(e.target.value)}
//         />
//         <button type="button" onClick={addComment}>
//           작성
//         </button>
//       </form>

//       <select onChange={(e) => setSearchType(e.target.value)}>
//         <option value="writer">작성자</option>
//         <option value="title">제목</option>
//       </select>
//       <input
//         type="text"
//         placeholder="검색어"
//         value={inputSearch}
//         onChange={(e) => setInputSearch(e.target.value)}
//       />
//       <button onClick={searchComment}>검색</button>

//       <table
//         border={1}
//         cellSpacing={0}
//         style={{ marginTop: "30px", width: "500px" }}
//       >
//         <thead>
//           <tr>
//             <th>번호</th>
//             <th>제목</th>
//             <th>작성자</th>
//           </tr>
//         </thead>
//         <tbody>
//           {comment.map((value, idx) => {
//             return (
//               <tr key={idx + 1}>
//                 <td>{idx + 1}</td>
//                 <td>{value.title}</td>
//                 <td>{value.writer}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>

//       <h3>검색 결과</h3>
//       {result.length > 0 ? (
//         <table
//           border={1}
//           cellSpacing={0}
//           style={{ marginTop: "30px", width: "500px" }}
//         >
//           <thead>
//             <tr>
//               <th>번호</th>
//               <th>제목</th>
//               <th>작성자</th>
//             </tr>
//           </thead>
//           <tbody>
//             {result.map((value, idx) => {
//               return (
//                 <tr key={idx + 1}>
//                   <td>{idx + 1}</td>
//                   <td>{value.title}</td>
//                   <td>{value.writer}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       ) : (
//         <div>검색 결과가 없습니다.</div>
//       )}
//     </div>
//   );
// }
