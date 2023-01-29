/**
 * React DOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 이스케이프 하므로
 * 애플리케이션에서 명시적으로 작성되지 않은 내용은 주입되지 않습니다.
 * 모든 항목은 렌더링 되기 전에 문자열로 변환되므로 XSS 공격을 방지할 수 있다.
 */

interface Response {
  potentiallyMaliciousInput: string;
}

const response: Response = {
  potentiallyMaliciousInput: '',
};

const title = response.potentiallyMaliciousInput;
// 이것은 안전합니다.
const element = <h1>{title}</h1>;
