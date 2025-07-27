import { Link } from "react-router"; 
import { FaSignOutAlt } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useUserInfo from "../hooks/useUserInfo";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { role, loading } = useUserInfo();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Logged out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Determine role-based dashboard path
  const dashboardPath =
    role === "admin"
      ? "/dashboard/admin"
      : role === "member"
      ? "/dashboard/member"
      
      : "/dashboard/user"

  return (
    <div className="navbar bg-[#f1f5f9] shadow-md px-4 md:px-26">
      <div className="navbar-start">
        <Link to="/" className="normal-case text-xl flex items-center gap-2">
          <img className="w-10 h-10" src="/src/assets/logo.png" alt="Logo" />
          BloCKWise
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3 text-xl font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/apartments">Apartments</Link></li>
          {user && !loading && (
            <li><Link to={dashboardPath}>Dashboard</Link></li>
          )}
        </ul>
      </div>

      <div className="navbar-end">
        {!user ? (
          <Link to="/login" className="btn btn-outline text-[14px]">Login</Link>
        ) : (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user.photoURL || "/src/assets/user.png"}
                  alt="Profile"
                />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
              <li className="text-center text-gray-700 font-semibold pointer-events-none">
                {user.displayName || "User"}
              </li>
              {!loading && (
                <li><Link to={dashboardPath}>Dashboard</Link></li>
              )}
              <li>
                <button onClick={handleLogOut} className="flex items-center gap-2 text-red-500">
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
