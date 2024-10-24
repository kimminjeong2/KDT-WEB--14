// 실습 views/header.ejs, index.ejs, session.ejs
const express = require("express");
const session = require("express-session");
const path = require("path");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "myPracticeSecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 1000, // 60초
    },
  })
);

// 유저 정보
const userInfo = { userid: "김민정", password: 1234 };

app.get("/", (req, res) => {
  res.render("index", { session: req.session });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/header", (req, res) => {
  res.render("header");
});

// app.get("/login", (req, res) => {
//   // req.session.키 = 값
//   req.session.userid = "김민정";
//   req.session.password = 1234;
//   res.send("set session!");
// });

// 로그인 처리
app.post("/login", (req, res) => {
  const { userid, password } = req.body;
  if (userid === "김민정" && password === 1234) {
    req.session.loggedIn = true;
    return res.redirect("/");
  }
  res.redirect("/header");
});

// 로그아웃 처리
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("로그아웃 실패 :", err);
    }
    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
