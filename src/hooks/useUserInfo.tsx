import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { UserRole } from "../types";
import useAuth from "./useAuth";

const useUserInfo = (refetchTrigger = 0) => {
  const { user } = useAuth();
  const [role, setRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure=useAxiosSecure();

  useEffect(() => {
    const fetchRole = async () => {
      if (!user?.email) {
        setLoading(false);
        return;
      }

      try {
        const res=await axiosSecure.get(`/users/${user.email}`);
        setRole(res.data.role || "user");
      } catch (err) {
        console.error("Failed to fetch role", err);
        setRole("user");
      } finally {
        setLoading(false);
      }
    };

    fetchRole();
  }, [user?.email, refetchTrigger]);

  return { role, loading };
};

export default useUserInfo;



