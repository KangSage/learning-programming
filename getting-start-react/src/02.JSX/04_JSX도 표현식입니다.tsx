/**
 * 컴파일이 끝나면 JSX 표현식이 정규 JavaScript 함수 호출이 되고 JavaScript 객체로 인식된다.
 * JSX를 if 구문 및 for loop 안에 사용하고, 변수에 할당하고, 인자로 넣고, 함수에서 반환할 수 있다.
 */
export interface User {
  firstName: string;
  lastName: string;
}

function formatName(user: User) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user: User) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
