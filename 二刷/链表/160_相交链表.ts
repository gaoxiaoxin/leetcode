
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let headALength = 0;
    let headBLength = 0;
    let replace = headA;
    let replaceA = headA;
    let replaceB = headB;
    while (replace?.next) {
        replace = replace.next;
        headALength++;
    }
    replace = headB;
    while (replace?.next) {
        replace = replace.next;
        headBLength++;
    }
    if (headALength > headBLength) {
        let Dvalue = headALength - headBLength;
        while (Dvalue > 0) {
            replaceA = replaceA!.next;
            Dvalue--
        }
    } else {
        let Dvalue = headBLength - headALength;
        while (Dvalue > 0) {
            replaceB = replaceB!.next;
            Dvalue--
        }
    }

    while (replaceA && replaceB) {
        if (replaceA === replaceB) {
            return replaceA;
        }
        replaceA = replaceA.next;
        replaceB = replaceB.next;
    }
    return null;
};