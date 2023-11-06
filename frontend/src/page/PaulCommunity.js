import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "../components/List";

const ListPaulCommunity = () => {
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
        <List key={info.id} info={info} />
      ))}
    </div>
  );
};

export default ListPaulCommunity;
