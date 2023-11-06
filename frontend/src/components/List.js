import React from "react";

const List = (props) => {
  // const { id, name, dateOfBirth, phone, email, profileImage, address } = props;

  return (
    <div>
      <div>이름 : {props.info.name}</div>
      <div>주소 : {props.info.address.city}</div>
      <div>이메일 : {props.info.email}</div>
      <div>전화번호 : {props.info.phone}</div>
      <br />
    </div>
  );
};

export default List;
