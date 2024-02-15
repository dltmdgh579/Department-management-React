import React, { useState, useEffect } from "react";
import axios from "axios";
import GroupInfoList from "../../../components/department/group/GroupInfoList";
import GroupInfoHeader from "./header/GroupInfoHeader";
import { useLocation, useParams } from "react-router-dom";
import styles from "../../../css/department/group/Group_info_list.module.css";
import moment from "moment";
import OtherGroupHeader from "./header/OtherGroupHeader";
import NameHeader from "../../../components/NameHeader";
import FooterNav from "../../../components/FooterNav";

const API_ROOT = process.env.REACT_APP_API_ROOT;

const GroupInfo = () => {
  const location = useLocation();
  const state = location.state;

  const department = useParams().department;
  const group = useParams().group;

  const [infoList, setInfoList] = useState([]);
  const [isCheck, setCheck] = useState(false);
  const [absenteeList, setAbsenteeList] = useState([]);

  useEffect(() => {
    const infoData = async () => {
      const res = await axios.get(`${API_ROOT}/${department}/${group}`);

      return res.data;
    };

    infoData().then((res) => setInfoList(res));
  }, [location]);

  const handleAbsent = (e) => {
    if (e.target.checked === false) {
      setCheck(false);
    } else if (e.target.checked === true) {
      setCheck(true);
    }
  };

  const checkAbsentee = (absenteeInfo) => {
    const id = absenteeInfo.id;
    const name = absenteeInfo.name;
    const absentDate = moment().format("YYYY-MM-DD");
    const isAbsent = absenteeInfo.isAbsent;
    if (isAbsent === true) {
      setAbsenteeList([...absenteeList, { id, name, absentDate }]);
    } else if (isAbsent === false) {
      setAbsenteeList(absenteeList.filter((absentee) => absentee.id != id));
    }
  };

  const sendAbsenteeList = async () => {
    await axios({
      method: "post",
      url: `${API_ROOT}/${department}/${group}/absent`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: JSON.stringify({ absenteeList: absenteeList }),
    }).then((response) => {
      setCheck(false);
    });
  };

  return (
    <div className={styles.parent_container}>
      <NameHeader pageName={state?.currentGroup.name} />
      <OtherGroupHeader currentDepartmentId={department} state={state} />
      <GroupInfoHeader params={[department, group]} state={state} />
      <div className={styles.toggle_switch_container}>
        <label className={styles.toggle_switch}>
          <input
            type="checkbox"
            checked={isCheck}
            onChange={(e) => handleAbsent(e)}
          ></input>
          <span className={styles.slider_round}></span>
        </label>
        <div>결석체크</div>
      </div>
      <div className={styles.group_info_container}>
        {infoList.map((info) => (
          <GroupInfoList
            key={info.id}
            info={info}
            check={isCheck}
            checkFunction={checkAbsentee}
          />
        ))}
      </div>
      {isCheck ? (
        <div className={styles.done_check} onClick={sendAbsenteeList}>
          ✔
        </div>
      ) : null}
      <FooterNav />
    </div>
  );
};

export default GroupInfo;
