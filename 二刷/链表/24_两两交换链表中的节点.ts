class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
function swapPairs(head: ListNode | null): ListNode | null {
    let dummyHead = new ListNode(0, head);
    let curry: ListNode | null = dummyHead;
    while (curry!.next !== null && curry!.next.next !== null) {
        let temp1 = curry!.next;
        let temp2 = curry!.next.next.next;
        curry!.next = curry!.next!.next;
        curry!.next!.next = temp1;
        temp1!.next = temp2;
        curry = curry!.next.next;
    }
    return dummyHead.next;
};

export {}