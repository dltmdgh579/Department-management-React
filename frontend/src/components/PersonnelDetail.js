import React from "react";

const PersonnelList = (props) => {
  // const { id, name, dateOfBirth, phone, email, profileImage, address } = props;

  return (
    <div>
      <div>이름 : {props.info.name}</div>
      <div>소속 : {props.info.department}</div>
      <div>생년월일 : {props.info.dateOfBirth}</div>
      <div>휴대전화 : {props.info.phone}</div>
      <div>이메일 : {props.info.email}</div>
      <div>주소 : {props.info.address}</div>
      <div>가족관계 : 준비중</div>
      <br />
      <hr />
      <br />
    </div>
  );
};

export default PersonnelList;
