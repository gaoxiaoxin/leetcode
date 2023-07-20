

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const set = new Set<number>();
    let flag = false;
    if (!headA || !headB) {
        return null;
    }
    let middle = headA;
    while (middle.next) {
        set.add(middle.val);
        middle = middle!.next;
    }
    middle = headB;

    while (middle.next) {
        if (set.has(middle.val)) {
            flag = true;
            return middle
        } else {
            flag = false
        }
        middle = middle.next;
    }
    return null;
};