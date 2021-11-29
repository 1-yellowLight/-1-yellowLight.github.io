2021-11-25

문제 발견 : 다른 사람의 아이디로 글 삭제 가능, 비공개글 빠르게 연타시 게시글 삭제 가능, 

2021-11-26

문제 발견 : 읽기 쓰기는 Firebase 보안 규칙으로 해결했으나 update와 delete가 제대로 작동하지 않음.

원인코드 :  allow write,update, delete: if request.auth.uid == request.resource.data.author_uid;

개발 권한 문제

2021-11-27

문제 해결 : Firebase firestore 의 보안규칙을 활용하여, 수정과 제거 권한을 개별로 전달함. 

문제 해결 과정 : security rules 중 resource.data.uid 해당 코드를 사용하면 게시글을 작성한 uid와 로그인한 사람(request.auth.uid)의 정보가 일치하면 권한을 할당할 수 있음.

문제 발견 : 이메일 인증 여부가 확인이 되나 메인화면으로 이동시 로그인이 되어있는 것을 확인함.

2021-11-29

문제 해결 : 이메일 인증이 안되어도 세션에 등록되어 사용자가 로그인 되는 문제를 해결. 세션을 생성하는 아래 코드를

<code> firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION) </code>

이메일이 인증되어있는지 구분하는 아래의 코드 안에

<code>if(firebase.auth().currentUser.emailVerified){</code>

넣어서 이메일 인증이 완료된 사용자에게만 세션을 생성 할 수 있도록 변경함.

디자인 수정 : a태그의 기본적인 디자인 수정



