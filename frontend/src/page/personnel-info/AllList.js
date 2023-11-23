import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonnelList from "../../components/PersonnelList";

const ListAll = () => {
  // useState
  const [infoList, setInfoList] = useState([]);

  // useEffect
  useEffect(() => {
    const infoData = async () => {
      const res = await axios.get("http://localhost:8080/list");
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

export default ListAll;
