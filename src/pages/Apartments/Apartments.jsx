import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import useAuth from "../../hooks/useAuth";
 

const Apartments = () => {
  const { user } = useAuth();  
  const navigate = useNavigate();
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/apartments")
      .then(res => {
        console.log("API response:", res.data);
        setApartments(res.data.apartments);
      })
      .catch(err => console.error(err));
  }, []);

  const handleAgreement = async (apartment) => {
    if (!user) {
      toast.error("Please login first to apply.");
      navigate("/login");
      return;
    }

    const agreementData = {
      email: user.email,
      name: user.displayName || user.name,
      apartmentNo: apartment.apartmentNo,
      floorNo: apartment.floorNo,
      blockName: apartment.blockName,
      rent: apartment.rent,
    };

    try {
      const response = await axios.post("http://localhost:5000/agreements", agreementData);
      if (response.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Application sent!",
          text: "Your agreement application is now pending.",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to apply for agreement.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Available Apartments</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartments.map((apt, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-4">
              <img src={apt.apartmentImage} alt="Apartment" className="rounded-lg mb-4 h-48 w-full object-cover" />
              <p><strong>Floor:</strong> {apt.floorNo}</p>
              <p><strong>Block:</strong> {apt.blockName}</p>
              <p><strong>Apartment No:</strong> {apt.apartmentNo}</p>
              <p><strong>Rent:</strong> {apt.rent}৳</p>
              <button 
                className="btn btn-outline btn-sm mt-4"
                onClick={() => handleAgreement(apt)}
              >
                Apply for Agreement
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Apartments;

