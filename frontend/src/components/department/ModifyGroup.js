import axios from "axios";
import styles from "../../css/department/Add_group.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddGroup = (props) => {
  const departmentId = props.state.id;
  const departmentName = props.state.name;
  const groupId = props.groupId;

  const [modifiedGroupName, setModifiedGroupName] = useState([]);

  const navigate = useNavigate();

  const modifyGroup = async () => {
    await axios({
      method: "post",
      url:
        "https://dnch-edu.com/api" + departmentId + "/" + groupId + "/modify",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: JSON.stringify({ name: modifiedGroupName }),
    }).then(() => {
      navigate("/" + departmentName, { state: props.state });
      window.location.reload();
    });
  };

  const inputGroupName = (e) => {
    setModifiedGroupName(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input className={styles.input_group} onChange={inputGroupName}></input>
      <div className={styles.add_button} onClick={modifyGroup}>
        ✔
      </div>
    </div>
  );
};

export default AddGroup;
