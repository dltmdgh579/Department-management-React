import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../../../css/personnel/detail/Personnel_detail.module.css";
import { useParams } from "react-router-dom";

const API_ROOT = process.env.REACT_APP_API_ROOT;

const PersonnelInfoDetail = (props) => {
  const id = useParams().id;

  // useState
  const [info, setInfo] = useState([]);

  // useEffect
  useEffect(() => {
    const infoData = async () => {
      const res = await axios.get(`${API_ROOT}/detail/${id}`);
      return res.data;
    };

    infoData().then((res) => setInfo(res));
  }, []);

  const telLink = "tel:" + info.phone;

  return (
    <div>
      <div className={styles.detail}>
        <div className={styles.info_container}>
          <img
            src={
              info.profileImage
                ? "https://dnch-edu.com/profile-image/" + info.profileImage
                : "https://d1qll2sj38w7uy.cloudfront.net/member/default/1.jpg"
            }
            className={styles.profile_image}
          ></img>
          <div className={styles.text_container}>
            <div className={styles.text_name}>{info.name}</div>
            <div>{info.departmentType}</div>
            <div>{info.dateOfBirth}</div>
            <div>
              <a href={telLink}>{info.phone}</a>
            </div>
          </div>
        </div>
        <div className={styles.detail_container}>
          <div>{info.email}</div>
          <div>{info.workSpace}</div>
          <div>{info.address}</div>
        </div>
        <hr />
        <div>가족관계 : 준비중</div>
      </div>
    </div>
  );
};

export default PersonnelInfoDetail;
