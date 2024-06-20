import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("Authorized") !== "OK") {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
