import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonnelList from "../../../components/personnel/list/PersonnelList";
import PersonnelListHeader from "../../../components/personnel/list/PersonnelListHeader";
import { useLocation } from "react-router-dom";
import qs from "qs";
import NameHeader from "../../../components/NameHeader";
import FooterNav from "../../../components/FooterNav";

const API_ROOT = process.env.REACT_APP_API_ROOT;

axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params, { arrayFormat: "repeat" });
};

const ListAll = (props) => {
  const { state } = useLocation();

  // useState
  const [infoList, setInfoList] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);
  const [gender, setGender] = useState("");
  const [order, setOrder] = useState("");

  // useEffect
  useEffect(() => {
    const infoData = async () => {
      const res = await axios.get(`${API_ROOT}/list`);
      return res.data;
    };

    infoData().then((res) => setInfoList(res));
  }, []);

  useEffect(() => {
    const infoData = async () => {
      const res = await axios.get(`${API_ROOT}/list`, {
        params: {
          departmentFilter: departmentList,
          genderFilter: gender,
          order: order,
        },
      });
      return res.data;
    };

    infoData().then((res) => setInfoList(res));
  }, [departmentList, gender, order]);

  const setDepartmentFunction = (selectedDepartment) => {
    const updated = selectedDepartment.filter((item) => item.isCheck !== false);
    const departmentName = updated.map((item) => {
      return item.name;
    });
    return departmentName;
  };

  const departmentCheckFilter = (selectedDepartment) => {
    const departmentName = setDepartmentFunction(selectedDepartment);
    setDepartmentList(departmentName);
  };

  const setGenderFunction = (selectedGender) => {
    const updated = selectedGender.filter((item) => item.isCheck !== false);
    const gender = updated.map((item) => {
      return item.gender;
    });
    return gender;
  };

  const genderCheckFilter = (selectedGender) => {
    const gender = setGenderFunction(selectedGender);
    setGender(gender);
  };

  const checkOrder = (selectedOrder) => {
    setOrder(selectedOrder);
  };

  return (
    <div>
      <NameHeader pageName={"전체 인원"} />
      <PersonnelListHeader
        department={state}
        departmentFilterFunction={departmentCheckFilter}
        genderFilterFunction={genderCheckFilter}
        orderFunction={checkOrder}
      />
      {infoList
        ? infoList.map((info) => <PersonnelList key={info.id} info={info} />)
        : null}
      <FooterNav />
    </div>
  );
};

export default ListAll;
