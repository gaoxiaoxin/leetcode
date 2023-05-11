import { ListNode } from "./ListNode"
function detectCycle(head: ListNode | null): ListNode | null {
    let dummyHead:ListNode | null = new ListNode(0, head);
    let fast:ListNode|null = dummyHead;
    let slow: ListNode | null = dummyHead;
    while (slow!.next !== null && slow!.next.next !== null) {
        slow = slow!.next.next;
        fast = fast!.next;
        if (fast === slow) {
            let newCurry = dummyHead.next;
            while (fast !== newCurry) {
                newCurry = newCurry!.next;
                slow = slow!.next
            }
            return newCurry;
        }
    }
    return null
};