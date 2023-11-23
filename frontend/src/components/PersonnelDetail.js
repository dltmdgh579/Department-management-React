import React from "react";

const PersonnelList = (props) => {
  // const { id, name, dateOfBirth, phone, email, profileImage, address } = props;

  return (
    <div>
      <div>이름 : {props.info.name}</div>
      <div>휴대전화 : {props.info.email}</div>
      <div>집전화 : {props.info.phone}</div>
      <div>이메일 : {props.info.email}</div>
      <div>학교/직장 : {props.info.phone}</div>
      <div>가족관계 : {props.info.email}</div>
      <br />
      <hr />
      <br />
    </div>
  );
};

export default PersonnelList;
