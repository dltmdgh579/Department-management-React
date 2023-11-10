import React, { useState, useEffect } from "react";
import axios from "axios";
import SmallGroupList from "../../components/SmallGroupList";

const SmallGroupKindergarten = () => {
  // useState
  const [infoList, setInfoList] = useState([]);

  // useEffect
  useEffect(() => {
    const infoData = async () => {
      // const res = await axios.get("http://localhost:8080/kindergarten");
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data;
    };

    infoData().then((res) => setInfoList(res));
  }, []);

  return (
    <div>
      {infoList.map((info) => (
        <SmallGroupList key={info.id} info={info} />
      ))}
    </div>
  );
};

export default SmallGroupKindergarten;
