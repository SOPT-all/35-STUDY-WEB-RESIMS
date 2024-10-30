# 리액트 심화 스터디

## 가이드

```
1. 스터디 레포를 clone 한다.
2. clone 후 `이름(ex: KimChaeHyun)`으로 브랜치를 생성한다.
3. 2번에서 생성한 브랜치 원격에 push를 해준다. "git push origin 이름"
4. 추가로 각 주차별 실습 브랜치 `weekn_이름 (ex: week1_KimChaeHyun)`를 생성한다. "git checkout -b weekn_이름" => 해당 브랜치에서 주차별 실습 진행
5. yarn create vite시 Project name은 주차별 실습 브랜치와 동일하게 `weekn_이름 (ex: week1_KimChaeHyun)` 생성한다.
6. 실습 진행중에는 `git add .`, `git commit -m "~~"`, `git push origin weekn_이름 (ex: week1_KimChaeHyun)` 하다가 (add, commit만 해도 ㄱㅊ)
7. 실습 완료 후, 주차 별 실습 브랜치(weekn_이름)에 push한다.
```

## PR 작성요령

```
1. 주차별 실습 브랜치(weekn_이름)를 push 후 pr을 작성할 때, base 브랜치를 가이드 2번에서 생성한 '이름 (ex: KimChaeHyun)` 브랜치로 해준다.
```

## 실습 준비요령

```
1. 실습에서 미리 필요한 코드가 있다면 `main`에서 `weekn_sample` 브랜치를 생성한다.
2. 생성한 브랜치에 필요한 코드를 업로드 후 add, commit, push 를 완료한다.
3. 다른 스터디원들을 실습할 때, 해당 브랜치를 pull 받아서 진행한다.
```
