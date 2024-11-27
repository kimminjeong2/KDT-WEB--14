import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <span>Router Tutorial</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <h1>React Router실습</h1>
        <li style={{ margin: "4px" }}>
          <Link to="products/student/kdt">학생KDT</Link>
        </li>
        <li style={{ margin: "4px" }}>
          <Link to="products/student/codingon">코딩온</Link>
        </li>
        <li style={{ margin: "4px" }}>
          <Link to="products/student/new?name=kdt3rd">searchParams</Link>
        </li>
      </ul>
    </header>
  );
}
