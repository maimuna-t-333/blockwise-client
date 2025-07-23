import { NavLink, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";
import useUserInfo from "../../hooks/useUserInfo";

const DashboardLayOut = () => {
  const { loading: authLoading } = useAuth();
  const { role, loading: roleLoading } = useUserInfo();

  const roleRoutes = {
    user: [
      { path: "profile", label: "My Profile" },
      { path: "announcements", label: "Announcements" },
    ],
    member: [
      { path: "profile", label: "My Profile" },
      { path: "payment", label: "Make Payment" },
      { path: "history", label: "Payment History" },
      { path: "announcements", label: "Announcements" },
    ],
    admin: [
      { path: "profile", label: "Admin Profile" },
      { path: "members", label: "Manage Members" },
      { path: "announcement", label: "Make Announcement" },
      { path: "requests", label: "Agreement Requests" },
      { path: "coupons", label: "Manage Coupons" },
    ],
  };

  const routes = roleRoutes[role];

  if (authLoading || roleLoading || !routes) {
    return <div className="text-center p-10">Loading dashboard...</div>;
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-6 space-y-3 shadow-md">
        <h2 className="text-lg font-bold mb-4 text-center">Dashboard</h2>
        {routes.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md font-medium hover:bg-gray-200 ${
                isActive ? "bg-gray-300 text-blue-600" : "text-gray-700"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayOut;



