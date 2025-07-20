import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";
// import useAuth from "../hooks/useAuth"; 
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInUser, googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInUser(email, password);
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      toast.success("Logged in with Google!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
    <Navbar></Navbar>
    <div className="py-10 flex items-center justify-center bg-[#f9fafb] px-4 ">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login </h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
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
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn btn-outline w-full">Login</button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn w-full flex items-center gap-2 border border-gray-300"
        >
          <FaGoogle className="text-lg" />
          Continue with Google
        </button>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className=" font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Login;


