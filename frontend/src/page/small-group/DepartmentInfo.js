import React, { useState, useEffect } from "react";
import axios from "axios";
import SmallGroupList from "../../components/SmallGroupList";
import { useLocation } from "react-router-dom";

const DepartmentInfo = (props) => {
  const { state } = useLocation();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const infoData = async () => {
      const res = await axios.get("http://dnch-edu.com:8080/" + state.id);
      return res.data;
    };

    infoData().then((res) => setInfo(res));
  }, []);

  return (
    <div>
      <SmallGroupList key={info.id} info={info} state={state} />
    </div>
  );
};

export default DepartmentInfo;
