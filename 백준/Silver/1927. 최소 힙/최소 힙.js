class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(el) {
    this.heap.push(el);
    this.upHeap();
  }

  upHeap() {
    let index = this.heap.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (this.heap[index] < this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  pop() {
    if (this.heap.length === 0) {
      return 0;
    } else if (this.heap.length === 1) {
      return this.heap.pop();
    } else {
      const rootNode = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.downHeap();
      return rootNode;
    }
  }

  downHeap() {
    let index = 0;
    const length = this.heap.length;

    while (index < length) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let minIndex = index;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[minIndex]
      ) {
        minIndex = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[minIndex]
      ) {
        minIndex = rightChildIndex;
      }

      if (minIndex === index) break;

      this.swap(index, minIndex);
      index = minIndex;
    }
  }
}

const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const x = input.slice(1).map(Number);

const minHeap = new MinHeap();

const result = [];

x.forEach((v) => {
  if (v === 0) {
    result.push(minHeap.pop());
  } else {
    minHeap.push(v);
  }
});

console.log(result.join('\n'));
