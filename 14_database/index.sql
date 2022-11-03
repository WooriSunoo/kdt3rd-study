-- DDL
-- Data Definition Language: 데이터베이스 /테이블 정의 

-- [데이터베이스 관련 명령어]

-- 1. 데이터베이스 생성(+한글인코딩)
CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;


-- 2. 데이터베이스 생성 확인(목록 조회)
SHOW databases;

--3. 데이터베이스 사용 선언
USE kdt;

-- 4. 데이터베이스 삭제
DROP DATABASE kdt;

-- [테이블관련 명령어]
-- 1. 테이블 생성
-- CREATE TABLE 테이블명 (
--     필드1 값형식,
--     필드2 값형식
-- );

-- 제약조건
-- NOT NULL: NULL 허용 x
-- AUTO_INCREMENT: 자동 숫자 증가(데이터들어올때마다 숫자값증가)
-- PRIMARY KEY: 기본키!
-- DEFAULT: 기본값
-- UNIQUE: 중복 허용 x
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100) NOT NULL
);

-- 2. 테이블 목록 확인
SHOW tables;

-- 3.테이블 구조 확인
DESC user;
-- 4. 테이블 삭제
-- DROP: 다 삭제 (구조 자체를 삭제)
-- TRUNCATE: 초기화 (테이블의 모든 행 일괄삭제)
DROP TABLE user;
TRUNCATE TABLE user;