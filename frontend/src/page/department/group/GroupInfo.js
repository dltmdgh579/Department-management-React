import React, { useState, useEffect } from "react";
import axios from "axios";
import GroupInfoList from "../../../components/department/group/GroupInfoList";
import GroupInfoHeader from "./header/GroupInfoHeader";
import { useParams } from "react-router-dom";
import styles from "../../../css/department/group/Group_info_list.module.css";

const GroupInfo = () => {
  const department = useParams().department;
  const group = useParams().group;

  const [infoList, setInfoList] = useState([]);

  useEffect(() => {
    const infoData = async () => {
      const res = await axios.get(
        "http://dnch-edu.com:8080/" + department + "/" + group,
      );

      return res.data;
    };

    infoData().then((res) => setInfoList(res));
  }, []);

  return (
    <div>
      <GroupInfoHeader params={[department, group]} />
      <div className={styles.parent_container}>
        {infoList.map((info) => (
          <GroupInfoList key={info.id} info={info} />
        ))}
      </div>
    </div>
  );
};

export default GroupInfo;
