class Counter {
  i = 5 * 60 * 999;
  interval: NodeJS.Timeout;
  executor: Function;
  constructor(fun: Function, i?: number) {
    this.executor = fun;
    if (i) {
      this.i = i;
    }
    this.executor();
    this.interval = setInterval(() => {
      this.executor();
    }, this.i);
  }
  new(fun: Function): void {
    this.executor = fun;
  }
  stop(): void {
    clearInterval(this.interval);
  }
}

export default Counter;
