import Counter from '../lib/counter';

import vk from '../lib/vk';

describe('Counter', function () {
  this.timeout(25000);
  describe('#start()', () => {
    it('should execute', (done) => {
      let counter = new Counter(test1, 200);
      setTimeout(() => {
        counter.stop();
        done();
      }, 1000);
    });

    it('should change', (done) => {
      let counter = new Counter(test1, 200);
      setTimeout(() => {
        counter.new(test2);
        setTimeout(() => {
          counter.stop();
          done();
        }, 1000);
      }, 1000);
    });

    it('should execute vk', (done) => {
      let counter = new Counter(testVK, 1000);
      setTimeout(() => {
        counter.stop();
        done();
      }, 2000);
    });
  });
});

function test1() {
  console.log('test1 complete');
}

function test2() {
  console.log('test2 complete');
}

async function testVK() {
  let res = await vk.setOnline();
  if (res) {
    console.log('vk test complete');
  } else {
    console.log('vk test not complete');
  }
}
