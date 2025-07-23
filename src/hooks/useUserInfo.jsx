import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import axios from "axios";

const useUserInfo = () => {
  const { user, loading: authLoading } = useAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && user?.email) {
      axios
        .get(`http://localhost:5000/users/${user.email}`)
        .then((res) => {
          setUserInfo(res.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [user, authLoading]);

  return {
    userInfo,
    loading,
    role: userInfo?.role,
  };
};

export default useUserInfo;

