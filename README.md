## 🐳 nodejs docker app

도커 실행하기

```shell
# docker run -d -p (localhost port):(container port) [volume config] (image name)
docker run -d -p 8080:8080 -v /usr/src/app/node_modules -v $(pwd):/usr/src/app wry5533/nodejs
```
