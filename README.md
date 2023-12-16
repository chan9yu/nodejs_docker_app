# 🐳 nodejs docker app

도커 실행하기

```shell
# docker run -d -p (localhost port):(container port) [volume config] (image name)
docker run -d -p 8080:8080 -v /usr/src/app/node_modules -v $(pwd):/usr/src/app wry5533/nodejs
```

<br />

## redis란?

`redis(Remote Dictionary Server)`는 메모리 기반의 키-값 구조 데이터 관리 시스템이며,
<br />
모든 데이터를 메모리에 저장하고 빠르게 조회할 수 있는 `비관계형 데이터베이스(NoSQL)`

<br />

### redis를 사용하는 이유?

메모리에 저장을 하기 때문에 MySQL 같은 데이터베이스에 저장, 조회를 훨씬 빠르게 처리할 수 있으며,
<br />
비록 메모리에 저장하지만 영속적으로도 보관이 가능하다.
<br />
때문에 서버를 재부팅해도 데이터를 유지할 수 있는 장점이 있다.
