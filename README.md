2021-11-25

문제 발견 : 다른 사람의 아이디로 글 삭제 가능, 비공개글 빠르게 연타시 게시글 삭제 가능, 

2021-11-26

문제 발견 : 읽기 쓰기는 Firebase 보안 규칙으로 해결했으나 update와 delete가 제대로 작동하지 않음.

원인코드 :  allow write,update, delete: if request.auth.uid == request.resource.data.author_uid;

개발 권한 문제

2021-11-27

문제 해결 : Firebase firestore 의 보안규칙을 활용하여, 수정과 제거 권한을 개별로 전달함. 

