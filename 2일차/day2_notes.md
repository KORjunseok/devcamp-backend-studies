# 2일차 정리 
---

예시 코드를 보며 어떻게 구현할지 생각해 보았다. 아무래도 회원가입/ 로그인은 auth 폴더에 있는 내용을 추가하거나 확인하며 구성할 걸 예정이고, users 폴더 등을 추가하여 모듈화를 해보는 방법도 생각 중이다. 

argon2 라이브러리와 접속 로그를 통한 분석은 시도해 본 적이 없어 구현하며 찾아보며 구현해 볼 예정이다. 

---
## NestJS 정리 계속

NestJS는 Angular로부터 영향을 많이 받았습니다. 모듈/컴포넌트 기반으로 프로그램을 작성함으로써 재사용성을 높여줍니다. IoC(Inversion of Control, 제어역전), DI(Dependency Injection, 의존성 주입), AOP(Aspect Oriented Programming, 관점 지향 프로그래밍)와 같은 객체 지향 개념을 도입. 

NestJS는 국내에서도 점점 인기를 얻고 있고 모두싸인과 당근마켓 등 여러 회사에서 적용하고 있다. 

CQRS(Command and Query Responsibility Segregation, 명령과 조회의 책임 분리): 복잡한 소프트웨어를 만들다 보면 소스 코드가 스파게티처럼 얽히게 되는 경우가 생깁니다. 데이터베이스에 변형을 가하는 명령과 데이터 읽기 요청을 처리하는 조회 로직을 분리함으로써 성능, 확장성, 보안을 강화할 수 있습니다.

ECMAScript 2015(ES6)에서 [Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)가 도입되면서 간결한 표현으로 작성할 수 있게 되었습니다. ECMAScript 2017에서는 [async/await](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Asynchronous/Async_await) 기능이 추가되면서 비동기 동작을 마치 동기로 처리하는 것처럼 코드를 작성할 수 있게 되었습니다.