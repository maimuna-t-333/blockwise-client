import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  // Agreement & Apartment info are 'none' for normal users
  const agreementAcceptDate = "none";
  const apartmentInfo = {
    floor: "none",
    block: "none",
    roomNo: "none",
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 ">My Profile</h2>
      <div className="flex items-center space-x-4">
        <img
          src={user.photoURL || "https://via.placeholder.com/100"}
          alt={user.displayName}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="space-y-2">
          <p><strong>Name:</strong> {user.displayName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Agreement Accept Date:</strong> {agreementAcceptDate}</p>
          <p><strong>Rented Apartment:</strong> none</p>
          <ul className="space-y-2">
            <li><strong>Floor:</strong> {apartmentInfo.floor}</li>
            <li><strong>Block:</strong> {apartmentInfo.block}</li>
            <li><strong>Room No:</strong> {apartmentInfo.roomNo}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
