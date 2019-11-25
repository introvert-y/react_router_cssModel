import req from "./req";
import api from "./api/index";
import err from "./fn/err";
import cachify from "./fn/cachify";
import authority from "./fn/authority";

req.use(api);
req.use(err);
req.use(cachify);
req.use(authority);

export default req;
