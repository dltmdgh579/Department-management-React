import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonnelDetail from "../../../components/personnel/detail/PersonnelDetail";
import { useParams } from "react-router-dom";

const PersonnelInfoDetail = (props) => {
  const id = useParams().id;

  // useState
  const [info, setInfo] = useState([]);

  // useEffect
  useEffect(() => {
    const infoData = async () => {
      const res = await axios.get("http://dnch-edu.com:8080/api/detail/" + id);
      return res.data;
    };

    infoData().then((res) => setInfo(res));
  }, []);

  return (
    <div>
      <PersonnelDetail key={info.id} info={info} />
    </div>
  );
};

export default PersonnelInfoDetail;
