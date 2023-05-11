function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if(head?.next === null && n === 1) return null;
    let curryHead: ListNode | null = new ListNode(0, head);
    let fast = curryHead;
    let slow: ListNode | null = curryHead;
    let num = 0;
    while (fast.next !== null) {
        fast = fast.next;
        if (num < n) {
            num++;
        } else {
            slow = slow!.next;
        }
    }
    if(slow?.next) slow.next = slow?.next?.next;
    return curryHead.next;
}