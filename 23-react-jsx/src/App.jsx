import logo from "./logo.svg";
import "./App.css";

function App() {
  // const name = "runa";
  // const student = "KDT14";
  // const styles = {
  //   backgroundColor: "yellow",
  //   fontSize: "24px",
  // };
  // 실습1
  const name = "마루";
  const animal = "강아지";
  const a = 10;
  const b = 2;
  return (
    <>
      <div className="App">
        {/* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello React.js</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header> */}

        {/* jsx문법 */}
        {/* 1. 하나로 감싸인 요소 */}

        {/* 2. 자바 스크립트 표현식 사용 
            - {}로 감싸면 js 표현식 사용 가능
            - {}에서 삼항 연산자, 단축 평가 등 사용 가능 (if, for문 등은 안된다)
          */}
        {/* <div>{name}안녕?</div>
        <div>{student === "KDT14" ? "kdt14기 수료생이군요!" : "누구세요?"}</div>
        {/* 3. style 속성
              - 리액트에서 돔 요소에 스타일 적용시 문저열 x -> 객체 사용
              - 스타일 이름 중 하이픈(-) 포함시 camelCase로 작성 
        */}
        {/*<div style={{ backgroundColor: "blue", fontSize: "24px" }}>하이</div>
        <div style={styles}>하이이</div> */}
        {/* 4. className 사용
            - class ->  className
            
            5. 종료 태그가 없는 태그의 사용
            - 기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야 함 or self-closing
            - 잘못된 예) <input>, <br>
            - 올바른 예) <input />, <br />
              
              
              6. 주석
              - // : jsx 외부 주석 */}
        <h2>
          제 반려동물의 이름은 {name}입니다.
          <br></br>
          {name}는 {animal}입니다.
        </h2>
        <div>{8 == 3 + 5 ? "정답입니다!" : "오답입니다!"}</div>
        <div>{a > b && "a가 b보다 큽니다"}</div>
        <h1 style={{ backgroundColor: "orange", color: "black" }}>
          Hello World
        </h1>
        <input type="text" placeholder="아이디" />
        <input type="text" placeholder="비번" />
      </div>
      <div></div>
    </>
  );
}

export default App;
