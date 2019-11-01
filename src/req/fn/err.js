import { Modal, message } from 'antd';
import history from '../../history';

const CODE = {
  sessionExpired: 3000,
};

/**
 * 判断请求状态是否成功
 * 参数：http状态码
 * 返回值：[Boolen]
 */
function isHttpSuccess(status) {
  return (status >= 200 && status < 300) || status === 304;
}

/**
 * 登录
 */
function goLogin() {
  const { pathname, search } = history.location;
  history.replace(`/login?url=${encodeURIComponent(pathname + search)}`);
}

/**
 * 错误信息提炼
 * @param {any} err 错误对象
 */
function msgPicker(err) {
  if (typeof err === 'string') {
    console.error(err);
    return err;
  }
  if (err.status && !isHttpSuccess(err.status)) {
    const msg = `服务器好像出了点小问题，请与客服联系~（错误代码：${err.status}）`;
    console.error(msg);
    return msg;
  }
  if (err.msg) {
    const { msg } = err;
    console.error(msg);
    return msg;
  }
  const msg = '未知错误';
  console.error(err);
  return msg;
}

/**
 * 错误信息提示
 * @param {any} err 错误对象
 */
function show(err) {
  const msg = msgPicker(err);
  if (err.code && err.code === CODE.sessionExpired) {
    return message
      .error('登录已过期，请重新登录', 2)
      .then(goLogin);
  }
  return Modal.warning({
    title: '提示',
    content: msg,
  });
}

export default {
  install(req) {
    req.err = {
      msgPicker,
      show,
      goLogin,
      CODE,
    };
  },
};
