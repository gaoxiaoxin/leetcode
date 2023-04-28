class CQueue {
  // 主栈
  stack1: Array<number> = [];
  // 副栈
  stack2: Array<number> = [];
  constructor(arr: Array<number> = []) {
    this.stack2 = arr;
  }
  appendTail(value: number): void {
    this.stack2.push(value);
  }

  deleteHead(): number | undefined {
    if (this.stack1.length !== 0) {
      return this.stack1.pop();
    } else {
      if (this.stack2.length === 0) {
        return -1;
      } else {
        let num = this.stack2.length;
        for (let i = 0; i < num; i++) {
          this.stack1.push(this.stack2.pop() as number);
        }
        return this.stack1.pop();
      }
    }
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

// 方法二
// class CQueue {
//   protected inStack: number[] = [];
//   protected outStack: number[] = [];

//   appendTail(value: number): void {
//     this.inStack.push(value);
//   }

//   deleteHead(): number {
//     if (!this.outStack.length) {
//       while (this.inStack.length) {
//         this.outStack.push(this.inStack.pop());
//       }
//     }
//     return this.outStack.pop() ?? -1;
//   }
// }
