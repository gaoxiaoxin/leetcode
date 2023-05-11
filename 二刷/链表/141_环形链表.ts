import { ListNode } from "./ListNode"
function hasCycle(head: ListNode | null): boolean {
    let dummyHead = new ListNode(0, head);
    let fast:ListNode|null = dummyHead;
    let slow = dummyHead;
    while (slow.next !== null && slow.next.next !== null) {
        slow = slow.next.next;
        fast = fast!.next;
        if (fast === slow) {
            return true
        }
    }
    return false
};


/**
 * 让快指针每次走两格， 慢指针每次走一格
 * 如果有环，那么两者必定会在环中相遇
 */