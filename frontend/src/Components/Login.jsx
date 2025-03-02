import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // local storage data
    const localStorageEmail = JSON.parse(localStorage.getItem("email"));
    const localStoragePassword = JSON.parse(localStorage.getItem("password"));

    if (email === localStorageEmail && password === localStoragePassword) {
      toast.success("Login successful");
      navigate("/");
    } else {
      toast.error("Please provide the correct information");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Home Icon */}
      <div className="absolute top-5 left-5">
        <Link to="/">
          <AiOutlineHome
            size={30}
            className="text-[#2C5F34] hover:text-[#24522a] transition-all duration-300 cursor-pointer"
          />
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to your account
        </h2>
      </div>
      <div className="mt-8 mx-auto w-[90%] 800px:w-[45%]">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleOnSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#2C5F34] focus:border-[#2C5F34] sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#2C5F34] focus:border-[#2C5F34] sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2C5F34] hover:bg-[#2C5F34]">
                Submit
              </button>
            </div>
            <div className="flex justify-center w-full">
              <h4>Not have an account?</h4>
              <Link to="/sign-up" className="text-[#2C5F34] pl-2">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* toast message */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
};

export default Login;