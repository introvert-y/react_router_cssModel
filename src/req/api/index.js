import transform from './transform';
import session from './session';
import user from './user';

export default {
  install(req) {
    req.session = session;
    req.user = transform(user);
  },
};
