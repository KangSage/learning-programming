import React from 'react';

const jsxElement = <h1 className="greeting">Hello, world!</h1>;
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!',
);

/**
 * createElement는 아래와 같은 객체를 생성한다.
 * // 주의: 다음 구조는 단순화되었습니다
 * const element = {
 *   type: 'h1',
 *   props: {
 *     className: 'greeting',
 *     children: 'Hello, world!'
 *   }
 * };
 */
