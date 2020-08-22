import secret from './secret';

class Credentials {
  vk = {
    token: secret.token,
  };
}

export = new Credentials();
