class MyQueue {
  array: number[];
  constructor(num: number[]) {
    this.array = num;
  }

  push(x: number): void {
    this.array.push(x);
  }

  pop(): number {
    return this.array.pop()!;
  }

  peek(): number {
    return this.array[0];
  }

  empty(): boolean {
    return this.array.length === 0 ? true : false;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
