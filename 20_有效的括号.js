/**
 * @param {string} s
 * @return {boolean}
 */
// 方法一
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let start = s[i];
    if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
      stack.push(s[i]);
    } else {
      let end = stack[stack.length - 1];
      if (
        (end == '(' && start == ')') ||
        (end == '[' && start == ']') ||
        (end == '{' && start == '}')
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length == 0;
};

// 方法二

var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    switch (c) {
      case '(': {
        stack.push(')');
        break;
      }
      case '[': {
        stack.push(']');
        break;
      }
      case '{': {
        stack.push('}');
        break;
      }
      default: {
        if (c !== stack.pop()) {
          return false;
        }
      }
    }
  }
  return stack.length == 0;
};
