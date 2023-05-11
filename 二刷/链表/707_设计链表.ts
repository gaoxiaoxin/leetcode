class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


class MyLinkedList {
    head: ListNode;
    constructor(linkList:any[]) {
        this.head = new ListNode(linkList[0]);        
        let curry = this.head;
        for (let i = 1; i < linkList.length; i++) {
            let node = new ListNode(linkList[i]);
            curry.next = node;
            curry = curry.next;
        }
    }

    get(index: number): any {
        let curry:ListNode | null = this.head ;
        let i = 0;
        while (i < index && curry?.next !== null) {
            curry = curry.next
            i++;
        }
        return curry.val
    }

    addAtHead(val: number): void {
        let node: ListNode | null = new ListNode(this.head.val);
        node.next = this.head.next;
        this.head.next = node;
        this.head.val = val;
    }

    addAtTail(val: number): void {
        let curry = this.head;
        let node:ListNode = new ListNode(val)
        while (curry.next !== null) {
            curry = curry.next;
        }
        curry.next = node;
    }

    addAtIndex(index: number, val: number): void {
        let curry = this.head;
        let node = new ListNode(val);
        let i = 0;
        while (i < index - 1 && curry.next !== null) {
            curry = curry.next;
            i++
        }
        node.next = curry.next;
        curry.next = node
    }

    deleteAtIndex(index: number): void {
        let curry = this.head;
        let i = 0;
        while (i < index - 1 && curry.next !== null) {
            curry = curry.next;
            i++
        }
        curry.next = curry.next!.next;
    }

    getArray(): Array<any> {
        let res:any[] = [];
        let curry = this.head;
        while (curry.next !== null) {
            res.push(curry.val);
            curry = curry.next
        }
        res.push(curry.val)
        return res;
    }
}



let list = new MyLinkedList(["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"])
console.log(list.get(5));
list.addAtHead(1);
console.log(list.head.val);
console.log(list.get(1));

console.log(list.getArray());


export {
    MyLinkedList
}

