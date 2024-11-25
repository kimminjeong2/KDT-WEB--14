import React, { useMemo, useState } from "react";

export default function Pr1() {
  const [text, setText] = useState("");
  const [find, setFind] = useState("");
  const cashedCalc = useMemo(() => {
    if (!find) return 0;

    let count = 0;
    let index = text.indexOf(find);

    while (index !== -1) {
      count++;
      index = text.indexOf(find, index + find.length);
    }

    return count;
  }, [text, find]);

  return (
    <div>
      <input
        type="text"
        placeholder="띄어쓰기를 하면서 사용하세요 "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="찾을 단어를 입력하세요."
        value={find}
        onChange={(e) => setFind(e.target.value)}
      />
      <p>
        "{find}" 단어의 빈도수 : {cashedCalc}
      </p>
    </div>
  );
}

// 사용자가 텍스트와 텍스트에서 찾고 싶은 단어를 입력받음
// 입력받은 두 문자열은 값을 변경할 때마다 상태를 업데이트
// 주어진 텍스트를 띄어쓰기 기준으로 나뉘어진 단어 내에 찾고자 하는 단어가 몇번 나타내는지 계산하는 함수 구현
// useMemo로 해당함수의 결과 저장
// 찾고자 하는 단어나 텍스트가 변경될 때만 계산 함수가 실행

// 해답

// import { useState, useMemo } from 'react';

// export default function UseMemoPrac() {
//   const [text, setText] = useState('');
//   const [searchWord, setSearchWord] = useState('');

//   // useMemo를 사용하여 단어 빈도수 계산 결과를 메모이제이션
//   const countWord = useMemo(() => {
//       // 입력받은 문자열와 찾고자 하는 단어가 빈 문자열이 아닌 경우에만 계산
//       if (text.trim() && searchWord.trim()) {
//         const words = text.split(' ');
//         return words.filter((word) => word.includes(searchWord)).length;
//       }
//       // 빈 문자열인 경우 0 반환
//       return 0;
//     },
//     [text, searchWord]
//   );

//   return (
//     <>
//       <input
//         type='text'
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder='텍스트를 입력하세요'
//       />
//       <input
//         type='text'
//         value={searchWord}
//         onChange={(e) => setSearchWord(e.target.value)}
//         placeholder='찾을 단어를 입력하세요'
//       />
//       <p>
//         "{searchWord}" 단어의 빈도수: {countWord}
//       </p>
//     </>
//   );
// }
