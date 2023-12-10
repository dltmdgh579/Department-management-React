import React, { useState, useEffect } from "react";
import axios from "axios";
import SmallGroupList from "../../components/SmallGroupList";

const SmallGroupKindergarten = () => {
  // useState
  const [info, setInfo] = useState([]);

  // useEffect
  useEffect(() => {
    const infoData = async () => {
      const res = await axios.get("http://dnch-edu.com:8080/1");
      return res.data;
    };

    infoData().then((res) => setInfo(res));
  }, []);

  return (
    <div>
      <SmallGroupList key={info.id} info={info} />
    </div>
  );
};

export default SmallGroupKindergarten;
