var simplifyPath = function (path) {
  let stack = [];
  let str = "";
  let arr = path.split("/");
  arr.forEach((item) => {
    if (val && val == "..") {
      stack.pop();
    } else if (val && val != ".") {
      stack.push(val);
    }
  });

  return "/" + stack.join("/");
};
