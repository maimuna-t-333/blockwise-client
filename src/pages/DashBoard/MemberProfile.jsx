import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MemberProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [agreement, setAgreement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/agreements?email=${user.email}`)
        .then(res => {
          console.log("Fetched agreement:", res.data);
          const agreementData = Array.isArray(res.data) ? res.data[0] : res.data;
          setAgreement(agreementData);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [user?.email, axiosSecure]);

  if (loading) return <p>Loading...</p>;
  if (!agreement?.name) return <p>No agreement found for this user.</p>;

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Member Profile</h2>
      <p><strong>Name:</strong> {agreement.name}</p>
      <p><strong>Email:</strong> {agreement.email}</p>
      <p><strong>Block:</strong> {agreement.blockName}</p>
      <p><strong>Floor:</strong> {agreement.floorNo}</p>
      <p><strong>Apartment:</strong> {agreement.apartmentNo}</p>
      <p><strong>Rent:</strong> ৳{Number(agreement.rent).toFixed(2)}</p>
      <p><strong>Status:</strong> {agreement.status}</p>
    </div>
  );
};

export default MemberProfile;
