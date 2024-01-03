import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonnelList from "../../../components/personnel/list/PersonnelList";
import PersonnelListHeader from "../../../components/personnel/list/PersonnelListHeader";

const ListAll = () => {
  // useState
  const [infoList, setInfoList] = useState([]);

  // useEffect
  useEffect(() => {
    const infoData = async () => {
      const res = await axios.get("http://dnch-edu.com:8080/api/list");
      return res.data;
    };

    infoData().then((res) => setInfoList(res));
  }, []);

  return (
    <div>
      <PersonnelListHeader />
      {infoList.map((info) => (
        <PersonnelList key={info.id} info={info} />
      ))}
    </div>
  );
};

export default ListAll;
