import React, { useState, useEffect } from "react";
import axios from "axios";
import AbsentInfoList from "../../../components/department/group/AbsentInfoList";
import { useParams } from "react-router-dom";

const AbsentInfo = () => {
  const department = useParams().department;
  const group = useParams().group;

  const [infoList, setInfoList] = useState([]);

  useEffect(() => {
    const infoData = async () => {
      const res = await axios.get(
        "http://dnch-edu.com:8080/" + department + "/" + group + "/absent",
      );

      return res.data;
    };

    infoData().then((res) => setInfoList(res));
  }, []);

  return (
    <div>
      {infoList.map((info) => (
        <AbsentInfoList key={info.id} info={info} />
      ))}
    </div>
  );
};

export default AbsentInfo;
