class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
function reverseList(head: ListNode | null): ListNode | null {
    let curry = head;
    let pre:ListNode|null = null;
    while (curry) {
        let temp = curry.next;
        curry.next = pre;
        pre = curry;
        curry = temp;
    }
    return pre;
};

export {}