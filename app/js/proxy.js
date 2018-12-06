import {FactoryApi} from "./api";

export const LogApi = new Proxy(FactoryApi, {
  get(target, name, receiver) {
    return Reflect.get({
      create(type, param) {
        target.create(type, param);
        console.log(`Request type: ${target.type}`);
        console.log(`url address of API: ${target.url}`);
        return target.create(type, param);
      },
      getApi() {

        return target.getApi();
      },
    }, name, receiver);
  },
});