import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../css/Login.module.css";

const API_ROOT = process.env.REACT_APP_API_ROOT;

axios.defaults.withCredentials = true;

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const postLogin = async () => {
    await axios({
      method: "post",
      url: `${API_ROOT}/login`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: JSON.stringify({ userId: userId, password: password }),
    })
      .then((res) => {
        if (res.status === 200) localStorage.setItem("Authorized", "OK");
        navigate("/");
      })
      .catch(() => {
        alert("아이디/비밀번호를 확인해주세요.");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.login_container}>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.login_form}>
          <div className={styles.form_group}>
            <label htmlFor="userId">ID:</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="password">PW:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.form_group}>
            <button type="button" onClick={postLogin}>
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
