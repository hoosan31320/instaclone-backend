module.exports = {
  apps: [
    {
      name: "instaclone", // pm2 name
      script: "./src/server-register.js", // // 앱 실행 스크립트
      instances: 3, // 클러스터 모드 사용 시 생성할 인스턴스 수
      exec_mode: "cluster", // fork, cluster 모드 중 선택
      merge_logs: true, // 클러스터 모드 사용 시 각 클러스터에서 생성되는 로그를 한 파일로 합쳐준다.
      autorestart: false, // 프로세스 실패 시 자동으로 재시작할지 선택
      watch: false
    },
  ]
};