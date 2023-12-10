import React, { useState } from "react";
import { Link } from "react-router-dom";

const SmallGroupList = (props) => {
  // const { id, name, dateOfBirth, phone, email, profileImage, address } = props;

  console.log(props);

  return (
    <div>
      <div>
        {props.info.smallGroupInfoList ? (
          <div>
            {/* <Link to={"/joshua/" + props.info.name.toLowerCase().replace(/ /g, "-")}> */}
            {props.info.smallGroupInfoList.map((smallGroup) => (
              <div smallGroup={smallGroup} key={smallGroup.name}>
                {smallGroup.name}
              </div>
            ))}
          </div>
        ) : null}
        {/* </Link> */}
      </div>
      <div>
        이번 주 출석 : {props.info.attendance}명 (총 재적{" "}
        {props.info.enrollment}명)
      </div>
    </div>
  );
};

export default SmallGroupList;
