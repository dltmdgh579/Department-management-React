import React from "react";
import { Link } from "react-router-dom";

const PersonnelList = (props) => {
  // const { id, name, dateOfBirth, phone, email, profileImage, address } = props;

  return (
    <div>
      <Link to={"/detail/" + props.info.id}>
        <div>이름 : {props.info.name}</div>
        <div>이메일 : {props.info.email}</div>
        <div>전화번호 : {props.info.phone}</div>
        <br />
        <hr />
        <br />
      </Link>
    </div>
  );
};

export default PersonnelList;
