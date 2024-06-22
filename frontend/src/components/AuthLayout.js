import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const API_ROOT = process.env.REACT_APP_API_ROOT;

const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("Authorized") !== "OK") {
      axios({
        method: "get",
        url: `${API_ROOT}`,
      })
        .then((res) => {
          if (res.status === 200) {
            sessionStorage.setItem("Authorized", "OK");
            navigate("/");
          } else {
            navigate("/login");
          }
        })
        .catch(() => {
          navigate("/login");
        });
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
