import { useContext } from "react";
import { AuthContext } from "../contacts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogout = () => {
    logout()
      .then(() => {
        alert("Signout successfully..");
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };

  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <button
        onClick={handleLogout}
        className="bg-red-800 px-8 py-2 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
