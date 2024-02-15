import { useNavigate } from "react-router-dom";
import styles from "../css/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import FooterNav from "../components/FooterNav";

const API_ROOT = process.env.REACT_APP_API_ROOT;

const FirstDepartment = () => {
  const [homeInfo, setHomeInfo] = useState([]);

  useEffect(() => {
    const infoData = async () => {
      const res = await axios.get(`${API_ROOT}`);
      return res.data;
    };

    infoData().then((res) => setHomeInfo(res));
  }, []);

  // navigate
  const navigate = useNavigate();

  // 부서 별 상세
  const navigateToKindergarten = () => {
    navigate("/kindergarten", {
      state: {
        currentDepartment: homeInfo[0],
        departmentList: homeInfo,
      },
    });
  };
  const navigateToHolykids = () => {
    navigate("/holykids", {
      state: {
        currentDepartment: homeInfo[1],
        departmentList: homeInfo,
      },
    });
  };
  const navigateToPaulCommunity = () => {
    navigate("/paul-community", {
      state: {
        currentDepartment: homeInfo[2],
        departmentList: homeInfo,
      },
    });
  };
  const navigateToJoshua = () => {
    navigate("/joshua", {
      state: {
        currentDepartment: homeInfo[3],
        departmentList: homeInfo,
      },
    });
  };

  // 전체 인원 리스트
  const navigateToAllList = () => {
    navigate("/list", { state: homeInfo });
  };

  return (
    <div>
      <div className={styles.departments_parent}>
        <div
          className={styles.departments_kindergarten}
          onClick={navigateToKindergarten}
        >
          <div className={styles.departments_img_kindergarten}></div>
          <div className={styles.departments_text}>영유치부</div>
        </div>
        <div
          className={styles.departments_holykids}
          onClick={navigateToHolykids}
        >
          <div className={styles.departments_img_holykids}></div>
          <div className={styles.departments_text}>홀리키즈</div>
        </div>
        <div
          className={styles.departments_paulcommunity}
          onClick={navigateToPaulCommunity}
        >
          <div className={styles.departments_img_paulcommunity}></div>
          <div className={styles.departments_text}>바울공동체</div>
        </div>
        <div className={styles.departments_joshua} onClick={navigateToJoshua}>
          <div className={styles.departments_img_joshua}></div>
          <div className={styles.departments_text}>여호수아 청년부</div>
        </div>
      </div>
      <div>
        <div className={styles.whole_list} onClick={navigateToAllList}>
          전체 인원
        </div>
      </div>
      <FooterNav />
    </div>
  );
};

export default FirstDepartment;
