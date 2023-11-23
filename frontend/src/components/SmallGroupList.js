import React from "react";
import { Link } from "react-router-dom";

const SmallGroupList = (props) => {
  // const { id, name, dateOfBirth, phone, email, profileImage, address } = props;

  return (
    <div>
      <Link to={"/joshua/" + props.info.name.toLowerCase().replace(/ /g, "-")}>
        <button>{props.info.name}</button>
        <br />
        <br />
      </Link>
    </div>
  );
};

export default SmallGroupList;
