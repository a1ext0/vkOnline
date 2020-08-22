declare module 'easyvk' {
  import fs from 'fs';

  const EasyVk: EasyVkStatic;
  export default EasyVk;

  export interface VK {
    call(method: string, data?: object, methodType?: string): Promise<any>;
    post(method: string, data?: object): Promise<any>;
    is(error: object, easyVkError: string): boolean;
    session: {
      access_token: string;
      save(): Promise<any>;
      setPath(path: string): Promise<any>;
      clear(): void;
    };
    uploader: {
      getUploadURL(
        methodName: string,
        params: object,
        returnAll: boolean
      ): Promise<any>;
      uploadFile(
        url: string,
        filePath: string | fs.ReadStream,
        fieldName: string,
        params: object
      ): Promise<any>;
      uploadFetchedFile(
        url: string,
        filePath: string,
        fieldName: string,
        params: object
      ): Promise<any>;
      upload(
        getUrlMethod: string,
        getUrlParams: object,
        saveMethod: string,
        saveParams: object,
        file: string,
        isWeb: boolean
      ): Promise<any>;
    };
  }

  interface EasyVkStatic {
    (object: Vkcon): Promise<VK>;
    randomId(): string;
    static: {
      call(method: string, data?: object, methodType?: string): Promise<any>;
      createExecute(method: string, params?: object): string;
      randomId(): string;
    };
    callbackAPI: {
      listen(params: object): object;
    };
    longpoll: {
      connect(params: object): Promise<Longpoll>;
    };
  }

  interface Longpoll {
    addEventCodeListener(eventCode: number, handler: Function): void;
    debug(debug: Function): void;
    close(): void;
    on(event: LongpollEvents, callback: Function): void;
  }

  type LongpollEvents =
    | 'message'
    | 'friendOnline'
    | 'editChat'
    | 'typeInDialog'
    | 'typeInChat'
    | 'error'
    | 'reconnectError'
    | 'failure'
    | 'close';

  interface Vkcon {
    username?: string | number | undefined;
    password?: string | undefined;
    token?: string | undefined;
    reauth?: boolean;
    v: number | string;
    mode?: object;
    fields?: string | [];
    sessionFile?: string;
    save?: boolean;
    clear?: boolean;
    platform?: string;
    clientId?: number | string;
    clientSecret?: string;
    lang?: string;
    captchaSid?: string | number;
    captchaKey?: string;
    proxy?: string;
    userAgent?: string;
    utils?: {
      longpoll?: boolean;
      uploader?: boolean;
    };
    debug?: object;
    authType?: string;
    captchaHandler?(captcha: object): Promise<any>;
  }
}
