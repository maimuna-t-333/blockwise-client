import { useState } from "react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must include an uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must include a lowercase letter.");
      return;
    }

    try {
      const res = await createUser(email, password);
      await updateUserProfile({ displayName: name, photoURL });

      Swal.fire({
        icon: "success",
        title: "Account Created!",
        text: "Welcome to BloCKWise",
      });

      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center bg-[#f9fafb] px-4 py-10">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Photo URL</label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="input input-bordered w-full"
                placeholder="https://imgbb.com/yourimage"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full"
                placeholder="••••••"
              />
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 6 characters, include uppercase & lowercase
              </p>
            </div>

            <button type="submit" className="btn btn-outline w-full">
              Register
            </button>
          </form>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;

