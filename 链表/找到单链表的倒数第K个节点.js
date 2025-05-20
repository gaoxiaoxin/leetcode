const findFormEnd = (head, k) => {
  var p = head;
  for (let i = 0; i < k; i++) {
    p = p.next;
  }
  var p1 = head;
  while (p !== null) {
    p = p.next;
    p1 = p1.next;
  }
  return p1;
};
