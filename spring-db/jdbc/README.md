# H2 docker로 개발환경 구성하기

## docker로 h2 실행하기

docker hub에서 최신 docker image를 검색해서 컨테이너를 실행한다.

```zsh
# 2023-01-29 기준 최신 버전 설치 - spring boot 3의 최신 라이브러리와 버전 같음
docker run -d -p 9092:9092 -p 8082:8082 -v ~/docker/h2-data:/h2-data --name=h2-2.1.214 thomseno/h2:2.1.214
```
