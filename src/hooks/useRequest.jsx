import { useContext, useEffect, useState } from "react";
import request from "../utils/request";
import UserContext from "../contexts/UserContext";

export default function useRequest(url, options = {}) {
  const [data, setData] = useState([]);
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await request(url, {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.token,
        },
        ...options,
      });
      setData(res);
    })();
  }, []);

  return { data, setData, loading, setLoading };
}
