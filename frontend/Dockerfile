FROM node:16-alpine
WORKDIR /app

# package.json 워킹 디렉토리에 복사 (.은 설정한 워킹 디렉토리를 뜻함)
COPY package.json ./

# 명령어 실행 (의존성 설치)
RUN npm install

# 현재 디렉토리의 모든 파일을 도커 컨테이너의 워킹 디렉토리에 복사한다.
COPY . .

# 3000번 포트 노출
EXPOSE 3000

# React App 빌드
RUN npm run build

# serve 설치
RUN npm install -g serve

# serve -s build 스크립트 실행
CMD ["serve", "-s", "build"]