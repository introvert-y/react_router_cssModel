import reqwest from 'reqwest';
import { baseUrl } from '../config';
// import session from './session';

function wrapper(api) {
  console.log('api', api);
  return (data, originData = null) => {
    const sessionId = '114f273d90b04a5fbcd1df677ea6d010';
    const {
      method, headers = {},
    } = api;
    if (sessionId) {
      headers.sessionId = sessionId;
    }
    let newData = null;
    let { url } = api;
    if (typeof data === 'object') {
      newData = { ...data };
      url = url.replace(/\/:\w+/g, (str) => {
        const w = str.substr(2);
        delete newData[w];
        return `/${data[w]}`;
      });
    } else {
      newData = data;
    }
    const options = {
      url: `${baseUrl}${url}`,
      method: (method || 'get').toUpperCase(),
      data: originData || newData,
      type: 'json',
      headers,
      contentType: 'application/json',
    };
    return reqwest(options);
  };
}

export default function (apis) {
  const obj = {};
  Object.keys(apis).map((key) => {
    obj[key] = wrapper(apis[key]);
    return key;
  });
  return obj;
}
