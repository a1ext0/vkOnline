import vk from '../lib/vk';
import { expect } from 'chai';

describe('VK', function () {
  describe('#getFriends()', () => {
    this.timeout(10000);
    it('works', async () => {
      let res = await vk.setOnline();
      expect(res).to.be.true;
    });
  });
});
