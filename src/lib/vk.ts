/// <reference types="../../typings/easyvk" />
import easyvk from 'easyvk';
import { VK } from 'easyvk';
import cr from '../cr';

class Easyvk {
  vk: Promise<VK>;
  constructor() {
    this.vk = easyvk({
      token: cr.vk.token,
      v: '5.122',
    });
  }

  async setOnline(): Promise<boolean> {
    let res;
    try {
      res = await (await this.vk).call('account.setOnline', {
        voip: 0,
      });
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  }
}
export default new Easyvk();
