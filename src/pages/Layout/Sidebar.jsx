import { NavLink } from "react-router";
import { FiUser, FiDollarSign, FiClock, FiUsers, FiSpeaker, FiFileText, FiGift } from "react-icons/fi";
import useUserInfo from "../../hooks/useUserInfo";

const Sidebar = () => {
  const { role } = useUserInfo();

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded hover:bg-blue-100 ${
      isActive ? "bg-blue-200 font-semibold" : ""
    }`;

  return (
    <div className="w-full md:w-64 h-full p-4 bg-base-100 border-r">
      <h2 className="text-xl font-bold mb-4 text-center">Dashboard</h2>
      <nav className="flex flex-col gap-2">
        {/* USER ROLE */}
        {role === "user" && (
          <>
            <NavLink to="/dashboard/user/profile" className={linkClass}>
              <FiUser /> My Profile
            </NavLink>
            <NavLink to="/dashboard/user/announcements" className={linkClass}>
              <FiSpeaker /> Announcements
            </NavLink>
          </>
        )}

        {/* MEMBER ROLE */}
        {role === "member" && (
          <>
            <NavLink to="/dashboard/member/profile" className={linkClass}>
              <FiUser /> My Profile
            </NavLink>
            <NavLink to="/dashboard/member/payment" className={linkClass}>
              <FiDollarSign /> Make Payment
            </NavLink>
            <NavLink to="/dashboard/member/history" className={linkClass}>
              <FiClock /> Payment History
            </NavLink>
            <NavLink to="/dashboard/member/announcements" className={linkClass}>
              <FiSpeaker /> Announcements
            </NavLink>
          </>
        )}

        {/* ADMIN ROLE */}
        {role === "admin" && (
          <>
            <NavLink to="/dashboard/admin/profile" className={linkClass}>
              <FiUser /> My Profile
            </NavLink>
            <NavLink to="/dashboard/admin/members" className={linkClass}>
              <FiUsers /> Manage Members
            </NavLink>
            <NavLink to="/dashboard/admin/announcements" className={linkClass}>
              <FiSpeaker /> Make Announcements
            </NavLink>
            <NavLink to="/dashboard/admin/requests" className={linkClass}>
              <FiFileText /> Agreement Requests
            </NavLink>
            <NavLink to="/dashboard/admin/coupons" className={linkClass}>
              <FiGift /> Manage Coupons
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
