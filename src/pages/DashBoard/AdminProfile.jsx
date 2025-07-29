import { useEffect, useState } from "react";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";


const AdminProfile = () => {
  const { user } = useAuth();
  const [adminData, setAdminData] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/users/${user.email}`)
        .then(res => setAdminData(res.data))
        .catch(err => console.error("Error fetching admin profile:", err));
    }
  }, [user, axiosSecure]);

  if (!adminData) {
    return <div className="text-center mt-10">Loading admin profile...</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Admin Profile</h2>
      <div className="space-y-3">
        <div><span className="font-medium">Name:</span> {adminData.name}</div>
        <div><span className="font-medium">Email:</span> {adminData.email}</div>
        <div><span className="font-medium">Role:</span> {adminData.role}</div>
      </div>
    </div>
  );
};

export default AdminProfile;
