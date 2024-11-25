import React from "react";
import { useForm } from "react-hook-form";

export default function Pr3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onValidSubmit = (data) => {
    console.log("onValid", data);
  };

  const onInValidSubmit = (err) => {
    console.log("onInValid", err);
  };

  return (
    <div>
      <h1>Pr3</h1>

      <form onSubmit={handleSubmit(onValidSubmit, onInValidSubmit)}>
        <input
          type="text"
          placeholder="username"
          {...register("username", {
            required: "이름을 입력해주세요",
            minLength: {
              message: "이름은 필수 항목 입니다.",
              value: 2,
            },
          })}
        />
        {errors.username?.message}
        <br />

        <input
          type="number"
          placeholder="age"
          {...register("age", {
            required: "나이를 입력해 주세요",
            validate: {
              isPositive: (value) =>
                value >= 0 || "0 이상의 숫자만 입력 가능합니다.",
            },
          })}
        />
        {errors.age?.message}
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
}

// 해답

// import { useForm } from 'react-hook-form';

// export default function FormPractice() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onValid = (data) => {
//     console.log(data);
//   };

//   return (
//     <>
//       <h1>react-hook-form 실습</h1>
//       <form onSubmit={handleSubmit(onValid)}>
//         <input
//           type="text"
//           placeholder="이름"
//           {...register('username', { required: '이름은 필수 항목입니다.' })}
//         ></input>
//         {errors.username && (
//           <div style={{ color: 'red' }}>{errors.username.message}</div>
//         )}
//         <br />
//         <input
//           type="text"
//           placeholder="나이"
//           {...register('age', {
//             validate: {
//               useNumber: (v) =>
//                 Number(v) >= 0 || '0이상의 숫자만 입력 가능합니다.',
//             },
//           })}
//         ></input>
//         {errors.age && <div style={{ color: 'red' }}>{errors.age.message}</div>}
//         <br />
//         <button type="submit">제출</button>
//       </form>
//     </>
//   );
// }
