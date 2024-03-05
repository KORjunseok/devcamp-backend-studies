# 1일차 정리 
---

## 1. NestJS 알아보기 
Nest.Js는 Node.js에 기반을 둔 웹 API 프레임워크로써 Express 또는 Fastify 프레임워크를 래핑하여 동작합니다. (정확히는 Nest로 작성한 소스 코드를 Node.js 기반 프레임워크인 Express나 Fastify에서 실행 가능한 자바스크립트 소스 코드로 컴파일하는 역할을 한다.)

### 프로젝트 생성
Node.js를 설치하면 기본적으로 npm이 함께 설치됩니다. npm은 Node.js에서 사용하는 패키지 관리자입니다. NestJS 서버를 구상하기 위해 먼저 @nest/cli를 설치합니다.
`$ npm i -g @nestjs/cli` 설치 후 `nest new project-name`을 실행하여 프로젝트를 생성한다. 

### OVERVIEW 
OVERVIEW에서 주의 깊게 봐야 할 요소는 Controllers, Providers, Modules, Pipes 4가지 요소가 있다. 

![OVERVIEW](https://velog.velcdn.com/images/y21zzp/post/6009f126-4495-4f61-ad1c-e792eb0160fa/image.png)

### 추천 영상 Shall We NestJS? 정리 
![라우팅 설명](https://velog.velcdn.com/images/y21zzp/post/6009f126-4495-4f61-ad1c-e792eb0160fa/image.png)

![Provider](https://velog.velcdn.com/images/y21zzp/post/ebd16c5a-2801-4c03-aa4d-433f6db7f5aa/image.png)

![모듈화](https://velog.velcdn.com/images/y21zzp/post/bb930777-681e-433a-9432-f318feaa3b5c/image.png)

![의존성 역전](https://velog.velcdn.com/images/y21zzp/post/495a65f8-9091-4f17-afca-db129e449ce7/image.png)


## 2. TypeORM 알아보기 
ORM(Object-Relational Mapping)은 데이터베이스의 관계를 객체로 바꾸어 개발자가 OOP로 데이터베이스를 쉽게 다룰 수 있도록 해 주는 도구입니다. SQL문을 그대로 코드에 기술하고 그 결과를 쿼리셋으로 다루는 방식에서 세부 쿼리문을 추상화하는 것으로 발전하였습니다. 개발자는 ORM에서 제공하는 인터페이스를 통해 일반적인 라이브러리를 호출하듯 DB에 데이터를 업데이트하고 조회할 수 있다. 
