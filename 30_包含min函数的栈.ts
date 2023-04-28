class MinStack {
  protected stack: Array<number> = [];
  constructor(arr: Array<number> = []) {
    this.stack = arr;
  }

  push(x: number): void {
    this.stack.push(x);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  min(): number {
    return Math.min(...this.stack);
  }
}

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();
minStack.pop();
minStack.top();
minStack.min();
