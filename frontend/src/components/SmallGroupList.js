import React from "react";

const SmallGroupList = (props) => {
  // const { id, name, dateOfBirth, phone, email, profileImage, address } = props;

  return (
    <div>
      <button>{props.info.name}</button>
      <br />
      <br />
    </div>
  );
};

export default SmallGroupList;
