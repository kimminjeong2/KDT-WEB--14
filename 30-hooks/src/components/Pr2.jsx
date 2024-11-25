import { useState, useCallback } from "react";

export default function UseCallbackPrac() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [editing, setEditing] = useState(null);
  const [editText, setEditText] = useState("");

  // item 문자열을 인자로 받아 editing, setEditText 상태의 값을 item 문자열로 업데이트
  const handleEdit = useCallback((item) => {
    setEditing(item);
    setEditText(item);
  }, []);

  // itemToSave 문자열을 인자로 받아 items 상태의 배열 요소 중
  // editing과 동일한 요소만 itemToSave로 변경하고
  // 나머지 요소는 그대로 유지한 배열을 items 상태값으로 업데이트
  const handleSave = useCallback(
    (itemToSave) => {
      setItems(items.map((item) => (item === editing ? itemToSave : item)));
      setEditing(null);
    },
    [items, editing]
  );

  // itemToDelete 문자열을 인자로 받아 items 상태의 배열 요소 중
  // itemToDelete와 동일하지 않은 요소로만 이루어진 배열을 items 상태값으로 업데이트
  const handleDelete = useCallback(
    (itemToDelete) => {
      setItems(items.filter((item) => item !== itemToDelete));
    },
    [items]
  );

  return (
    <ul>
      {/* 여기서 만약 editing state가 해당 요소와 동일하다면 li요소의 내부에 input 태그와 저장 버튼이 렌더되고, 아니라면 item의 값과 수정, 삭제 버튼이 렌더 된다. */}
      {items.map((item) => (
        <li key={item}>
          {editing === item ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            item
          )}
          {editing === item ? (
            <button onClick={() => handleSave(editText)}>Save</button>
          ) : (
            <>
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(item)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

// 리스트 아이템을 렌더링하는 컴포넌트
// 각 아이템은 수정, 삭제 가능
// 수정, 수정사항 저장, 삭제하는 함수는 모두 useCallback을 사용하여 메모이제이션
// 세 useCallback의 의존성 배열은 모두 다름

// 해설

// import React, { useCallback, useState } from "react";

// export default function UseCallbackPrac() {
//   const [items, setItems] = useState(["Item1", "Item2", "Item3"]);
//   const [editText, setEditText] = useState("");
//   const [editIdx, setEditIdx] = useState(null);

//   const handleEdit = useCallback((item, idx) => {
//     setEditText(item);
//     setEditIdx(idx);
//   }, []);

//   const handleSave = useCallback(() => {
//     setItems(items.map((item, idx) => (idx === editIdx ? editText : item)));
//     setEditIdx(null);
//   }, [editText, editIdx, items]);

//   const handleDelete = useCallback(
//     (targetIdx) => {
//       setItems(items.filter((item, idx) => idx !== targetIdx));
//     },
//     [items]
//   );

//   return (
//     <div>
//       <ul>
//         {items.map((item, idx) => {
//           return (
//             <li key={idx}>
//               {editIdx === idx ? (
//                 <>
//                   <input
//                     type="text"
//                     value={editText}
//                     onChange={(e) => setEditText(e.target.value)}
//                   />
//                   <button onClick={handleSave}>Save</button>
//                 </>
//               ) : (
//                 <>
//                   {item}
//                   <button onClick={() => handleEdit(item, idx)}>Edit</button>
//                   <button onClick={() => handleDelete(idx)}>Delete</button>
//                 </>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
