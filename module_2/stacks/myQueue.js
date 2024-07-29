// INCOMPLETE
class MyQueue {
  constructor() {
    this.stack1 = new Array();
    this.stack2 = new Array();
  }

  push(x) {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop())
    }
    this.stack1.push(x)
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop())
    }
  }

  pop() {
    return this.stack1.pop()
  }

  peek() {
    return this.stack1.top()
  }

  empty() {
    return this.stack1.isEmpty()
  }
}

let queue = new MyQueue(2)

console.log(queue)
