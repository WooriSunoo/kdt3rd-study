-- 데이터베이스 목록보기
SHOW databases;

-- 데이터베이스 생성
CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

-- 데이터베이스 선택(사용)
USE kdt;

-- 데이터베이스 내 테이블 목록 보기
SHOW tables;

-- #################
-- DDL
-- 테이블 생성

CREATE TABLE visitor (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

-- 테이블 구조 확인
DESC visitor;

INSERT INTO visitor (name, comment) VALUES ('홍길동','내가 왔다');
INSERT INTO visitor (name, comment) VALUES ('이찬혁','으라차차');
INSERT INTO visitor (name, comment) VALUES ('이미미','으으으');
INSERT INTO visitor (name, comment) VALUES ('아이유','으으으');

UPDATE visitor SET name = '홍수정' WHERE id=1;

-- DCL
-- mysql 사용자 추가 (user계정)
-- CREATE USER 'user'@'%' IDENTIFIED BY '비밀번호';
CREATE USER 'user'@'%' IDENTIFIED BY '1234';
-- user 계정에 db권한 부여(모든 db에 접근 가능 설정)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- 현재 사용중인 mysql캐시 지우고 새로운 설정 적용
FLUSH PRIVILEGES;

-- 비밀번호 변경하고 싶다면?
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234'

DELETE FROM user WHERE id = 11;

-- 테이블 데이터 수정(update)
UPDATE visitor SET name='누구', comment='아무말' WHERE id=1;
