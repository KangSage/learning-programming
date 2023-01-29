/**
 * 어트리뷰트에 따옴표를 이용해 문자열 리터럴을 정의할 수 있다.
 * 따옴표(문자열 값에 사용) 또는 중괄호(표현식에 사용) 중 하나만 사용하고
 * 동일한 어트리뷰트에 두 가지를 동시에 사용하면 안 됩니다.
 * React DOM은 HTML 어트리뷰트 이름 대신 camelCase 프로퍼티 명명 규칙을 사용
 */
const user: { avatarUrl: string } = {
  avatarUrl: '',
};
const element1 = <a href="https://www.reactjs.org">link</a>;
const element2 = <img src={user.avatarUrl} alt=""></img>;
