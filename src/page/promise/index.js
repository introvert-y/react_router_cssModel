import { useEffect } from "react";
import req from "../../req";

function Page() {
  // const [infos, setInfos] = useState(null);
  function getCrtUserInfos() {
    req.user
      .getMyInfo()
      .then(res => {
        if (res.code !== 0) {
          req.err.show(res);
          return;
        }
        console.log("getCrtUserInfos", res);
      })
      .catch(req.err.show);
  }
  useEffect(() => {
    getCrtUserInfos();
  }, []);

  return "11111";
}

export default Page;
