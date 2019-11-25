function getInfoWraper(req) {
  return opt =>
    new Promise((res, rej) => {
      req.user
        .getMyAuthority(opt)
        .then(r1 => {
          if (r1.code !== 0) {
            rej(r1);
            return;
          }
          const { menuCodes, menuTrees, permissionCodes } = r1.data;
          const menuMap = {};
          const funcMap = {};
          menuCodes.forEach(item => {
            menuMap[item] = true;
          });
          permissionCodes.forEach(item => {
            funcMap[item] = true;
          });
          res({
            menuMap,
            menuTrees,
            funcMap
          });
        })
        .catch(rej);
    });
}

module.exports = {
  install(R) {
    const req = R;
    req.authority = {
      getInfo: getInfoWraper(R)
    };
  }
};
