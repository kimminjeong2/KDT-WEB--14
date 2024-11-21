import React, { useState } from "react";

export default function Pr() {
  const [alphabet, setAlphabet] = useState([]);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const addAlpha = () => {
    // [퀴즈] name이 빈값이라면 alpabet 상태 변경 X
    if (name.trim().length === 0) {
      return;
    }
    if (email.trim().length === 0) {
      return;
    }
    // alphabet 추가
    const newAlpha =
      // alphabet.concat(name);
      { id: alphabet.length + 1, alpha: `${name}: ${email}` };
    setAlphabet([...alphabet, newAlpha]);
    // name 초기화
    setname("");
    setemail("");
  };

  const deleteAlpha = (targetId) => {
    const newAlpha = alphabet.filter((value) => value.id !== targetId);
    setAlphabet(newAlpha);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      addAlpha();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addAlpha}>등록</button>
      <ol>
        {alphabet.map((value, idx) => (
          <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
            {value.alpha}
          </li>
        ))}
        {alphabet.length === 0 && <h2>코디: codi@gmail.com</h2>}
        {alphabet.length === 0 && <h2>김민정: zbdj0123@gmail.com</h2>}
      </ol>
      <hr />
    </div>
  );
}

// 실습 1, 2번해답

// import { useState } from 'react'

// const Practice2 = () => {
//   const [data, setData] = useState([
//     { id: 1, user: '코디', email: 'codee@gmail.com' },
//     { id: 2, user: '윤소희', email: 'yoonsohee@gmail.com' },
//   ])

//   const [inputUser, setInputUser] = useState('')
//   const [inputEmail, setInputEmail] = useState('')
//   const [nextId, setNextId] = useState(data.length + 1) // useState(3)

//   const onChangeUser = (e) => setInputUser(e.target.value)
//   const onChangeEmail = (e) => setInputEmail(e.target.value)
//   const onKeyDownEnter = (e) => {
//     if (e.key === 'Enter') {
//       eventClick()
//     }
//   }

//   const onRemoveData = (id) => {
//     const NextData = data.filter((data) => data.id !== id)
//     setData(NextData)
//   }

//   const eventClick = () => {
//     const nextData = data.concat({
//       id: nextId,
//       user: inputUser,
//       email: inputEmail,
//     })

//     setNextId(nextId + 1)
//     setData(nextData)
//     setInputUser('')
//     setInputEmail('')
//   }

//   const dataList = data.map((data) => (
//     <h2 key={data.id} onDoubleClick={() => onRemoveData(data.id)}>
//       {data.user}: {data.email}
//     </h2>
//   ))

//   return (
//     <div>
//       <input
//         type="text"
//         name="user"
//         placeholder="이름"
//         value={inputUser}
//         onChange={onChangeUser}
//       />

//       <input
//         type="text"
//         name="email"
//         placeholder="이메일"
//         value={inputEmail}
//         onChange={onChangeEmail}
//         onKeyDown={onKeyDownEnter}
//       />

//       <button onClick={eventClick}>등록</button>

//       <div>{dataList}</div>
//     </div>
//   )
// }

// export default Practice2
