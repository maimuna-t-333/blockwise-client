import useUserInfo from "../hooks/useUserInfo";
import useAuth from "../hooks/useAuth"; // to get current user
import React from "react";
import { UserRole } from "../types";

interface RoleRouteProps{
  children:React.ReactNode;
  allowedRole:UserRole;
}

const RoleRoute = ({ children, allowedRole }: RoleRouteProps) => {
  const { loading: authLoading } = useAuth(); // get logged-in user
  const { role, loading: roleLoading } = useUserInfo(); // pass email

  if (authLoading || roleLoading) return <span>Loading...</span>;

  if (role !== allowedRole) return <h1>Access Denied</h1>;

  return children;
};

export default RoleRoute;

