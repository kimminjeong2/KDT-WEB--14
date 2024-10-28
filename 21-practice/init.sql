CREATE TABLE user (
  id INT NOT NULL PRIMARY KEY auto_increment,
  pw VARCHAR(255) NOT NULL,
  name VARCHAR(15) NOT NULL,
  userid VARCHAR(15) NOT NULL
);

-- insert into visitor (name, comment) values("홍길동", "내가 왔다");
-- insert into visitor (name, comment) values("이찬혁", "으라차차");

-- user 생성
create user 'user'@'localhost' identified by '1234';
-- user 계정에 DB 권한 부여 (모든 DB에 접근 가능하도록)
grant all privileges on *.* to 'user'@'localhost' with grant option;
