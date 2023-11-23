import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonnelList from "../../../components/PersonnelList";
import { useParams } from "react-router-dom";

const GroupInfo = () => {
  const department = useParams().department;
  const group = useParams().group;

  // useState
  const [infoList, setInfoList] = useState([]);

  // useEffect
  useEffect(() => {
    const infoData = async () => {
      // const res = await axios.get("http://localhost:8080/" + department + "/" + group");
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data;
    };

    infoData().then((res) => setInfoList(res));
  }, []);

  return (
    <div>
      {infoList.map((info) => (
        <PersonnelList key={info.id} info={info} />
      ))}
    </div>
  );
};

export default GroupInfo;
