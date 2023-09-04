/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let str1 = '';
    let str2 = '';
    let str = ''
    while (l1) {
        str1 += l1.val;
        l1 = l1.next;
    }
    while (l2) {
        str2 += l2.val;
        l2 = l2.next
    }
    str1 = str1.split('').reverse().join('') - 0;
    str2 = str2.split('').reverse().join('') - 0
    str = str1 + str2 + '';
    let result = new ListNode(str[0])
    let head = result;
    for (let i = 1; i < str.length; i++) {
        head.val = new ListNode(str[i]);
        head = result.next;
    }
    return result;
};

export {}