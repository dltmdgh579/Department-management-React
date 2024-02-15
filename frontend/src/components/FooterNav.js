import { useNavigate } from "react-router-dom";
import styles from "../css/Footer_nav.module.css";

const FooterNav = (props) => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.home} onClick={() => navigateHome()} />
        <div className={styles.my_department} />
        <div className={styles.my_group} />
        <div className={styles.settings} />
      </div>
    </div>
  );
};

export default FooterNav;
