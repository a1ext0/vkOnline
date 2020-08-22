import Counter from './lib/counter';
import vk from './lib/vk';

class Main {
  vk = vk;
  counter: Counter;
  constructor() {
    this.counter = new Counter(this.online);
  }
  online() {
    vk.setOnline();
  }
}

new Main();
