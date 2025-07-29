import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useUserInfo = () => {
  const { user, loading } = useAuth();
  const [role, setRole] = useState("user"); 
  const [userInfoLoading, setUserInfoLoading] = useState(true);

  useEffect(() => {
const fetchRole = async () => {
  if (user?.email) {
    try {
      const res = await fetch(`http://localhost:5000/api/agreements?email=${user.email}`);

      // Check status before trying to parse
      if (!res.ok) {
        console.warn("Non-OK response from agreement API:", res.status);
        setRole("user");
        return;
      }

      const agreement = await res.json();
      if (agreement && agreement.email) {
        setRole("member");
      } else {
        setRole("user");
      }
    } catch (err) {
      console.error("Error checking agreement", err);
    } finally {
      setUserInfoLoading(false);
    }
  }
};


    if (!loading) {
      fetchRole();
    }
  }, [user, loading]);

  return { role, user, loading: loading || userInfoLoading };
};

export default useUserInfo;


