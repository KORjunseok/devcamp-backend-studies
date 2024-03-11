# 2주차 1일 정리 
---
## 간략 정리
##### OAuth 를 통해 본 개념 정리

인증 : OAuth에서 리소스는 보호된 정보를 의미함

인가 : 자원에 접근할 권한을 부여하는 과정. 인가가 완료되면 리소스의 접근 권한 정보가 있는 액세스 토큰을 클라이언트에게 보내줌

##### 설치 
yarn add @nestjs/config
yarn add passport-google-oauth20
yarn add -D @types/passport-google-oauth20

##### 코드 실행 순서
![OAuth](https://velog.velcdn.com/images/y21zzp/post/7f19f1f7-0f49-4016-a173-d4d699ecfbc4/image.png)

##### 트러블 슈팅
![as-is](https://velog.velcdn.com/images/y21zzp/post/930f2e2b-33c5-45bb-9e9e-44236edc1443/image.png)

![to-be](https://velog.velcdn.com/images/y21zzp/post/d3c3b84d-e10f-47a5-868a-09b71dc46a9d/image.png)

clientID 를 clientId라고 입력해서 발생한 오류였습니다. 
