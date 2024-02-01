import axios from "axios";
import styles from "../../css/department/Add_group.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_ROOT = process.env.REACT_APP_API_ROOT;

const AddGroup = (props) => {
  const departmentId = props.state.id;
  const departmentName = props.state.name;

  const [newGroup, setNewGroup] = useState([]);

  const navigate = useNavigate();

  const addNewGroup = async () => {
    await axios({
      method: "post",
      url: `${API_ROOT}/${departmentId}`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: JSON.stringify({ name: newGroup }),
    }).then(() => {
      navigate("/" + departmentName, { state: props.state });
      window.location.reload();
    });
  };

  const inputGroupName = (e) => {
    setNewGroup(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input className={styles.input_group} onChange={inputGroupName}></input>
      <div className={styles.add_button} onClick={addNewGroup}>
        +
      </div>
    </div>
  );
};

export default AddGroup;
