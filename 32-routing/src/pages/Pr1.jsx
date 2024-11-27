import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function Pr1() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { student } = useParams();
  const realName = searchParams.get("name");

  return (
    <>
      <p>학생 이름은 {student} 입니다.</p>
      {realName && <p>실제 이름은 {realName}입니다.</p>}
      <button onClick={() => navigate(-1)}>이전페이지로</button>
    </>
  );
}
