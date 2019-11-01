
import { useEffect, useState } from 'react';
import req from '../../req';

function Page() {
  const [infos, setInfos] = useState(null);
  function getCrtUserInfos() {
    req.user.getMyAuthority()
      .then((res) => {
        if (res.code !== 0) {
          // req.err.show(res);
          return;
        }
        setInfos(res.data);
        console.log('getCrtUserInfos', infos);
      })
      // .catch(req.err.show);
  }
  useEffect(() => {
    getCrtUserInfos();
  }, [])
  return 111;
}

export default Page;
