import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useUserInfo = () => {
  const { user, loading: authLoading } = useAuth();
  const [role, setRole] = useState(null);
  const [userInfoLoading, setUserInfoLoading] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      if (!user?.email) {
        // No user or no email means default role 'user'
        setRole("user");
        setUserInfoLoading(false);
        return;
      }

      try {
        const res = await fetch(`http://localhost:5000/api/agreements?email=${user.email}`);

        if (!res.ok) {
          console.warn("Non-OK response from agreement API:", res.status);
          setRole("user");
        } else {
          const agreement = await res.json();
          if (agreement && agreement.email) {
            setRole("member");
          } else {
            setRole("user");
          }
        }
      } catch (err) {
        console.error("Error checking agreement", err);
        setRole("user");
      } finally {
        setUserInfoLoading(false);
      }
    };

    if (!authLoading) {
      setUserInfoLoading(true); // Start loading before fetch
      fetchRole();
    }
  }, [user, authLoading]);

  return { role, user, loading: authLoading || userInfoLoading };
};

export default useUserInfo;
