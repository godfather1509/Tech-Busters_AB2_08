import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verified, setVerified] = useState(true);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  // Fetch the stored email securely
  const storedEmail = localStorage.getItem("email");

  // Ensure email is valid before parsing
  const userEmailFromLocalStorage = storedEmail ? storedEmail.replace(/"/g, "") : "";

  // Handle email input
  const handleEmailChange = (e) => {
    const inputValue = e.target.value.trim().toLowerCase();
    setEmail(inputValue);

    if (inputValue === userEmailFromLocalStorage.toLowerCase()) {
      setVerified(false);
    } else {
      setVerified(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    toast.success("Password updated successfully!");

    // Save new password securely (Consider backend authentication)
    localStorage.setItem("password", JSON.stringify(newPassword));

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Forgot your password?
        </h2>
      </div>
      <div className="mt-8 mx-auto w-[90%] 800px:w-[45%]">
        <div className="bg-white py-8 px-6 shadow-lg sm:rounded-lg sm:px-10">
          <div className="flex items-center justify-center">
            <img
              src="https://duzycfafl38re.cloudfront.net/Website/Images/password15112022125910.gif"
              alt="Reset Password"
              className="w-[100px] h-[100px]"
            />
          </div>

          <form className="space-y-6 mt-5" onSubmit={handleFormSubmit}>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#2C5F34] focus:border-[#2C5F34] sm:text-sm"
                />
              </div>
            </div>

            {/* New Password Input */}
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="newPassword"
                  autoComplete="new-password"
                  required
                  disabled={verified}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#2C5F34] focus:border-[#2C5F34] sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-3 top-3 cursor-pointer text-gray-600"
                    size={22}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-3 top-3 cursor-pointer text-gray-600"
                    size={22}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible2 ? "text" : "password"}
                  name="confirmPassword"
                  autoComplete="new-password"
                  required
                  disabled={verified}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#2C5F34] focus:border-[#2C5F34] sm:text-sm"
                />
                {visible2 ? (
                  <AiOutlineEye
                    className="absolute right-3 top-3 cursor-pointer text-gray-600"
                    size={22}
                    onClick={() => setVisible2(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-3 top-3 cursor-pointer text-gray-600"
                    size={22}
                    onClick={() => setVisible2(true)}
                  />
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={verified}
                className={`group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                  verified ? "bg-gray-500" : "bg-[#2C5F34] hover:bg-[#24632E]"
                } transition-all duration-300`}
              >
                Change Password
              </button>

              {/* Toast Notifications */}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
