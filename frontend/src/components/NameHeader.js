import { useNavigate } from "react-router-dom";
import styles from "../css/Name_header.module.css";

const NameHeader = (props) => {
  const pageName = props.pageName;

  const convertPageName = (pageName) => {
    if (pageName === "KINDERGARTEN") return "영유치부";
    else if (pageName === "HOLYKIDS") return "홀리키즈";
    else if (pageName === "PAULCOMMUNITY") return "바울 공동체 청소년부";
    else if (pageName === "JOSHUA") return "여호수아 청년부";
    else return pageName;
  };

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div
        className={styles.go_back_img}
        onClick={() => {
          navigate(-1);
        }}
      ></div>
      <div className={styles.page_name}>{convertPageName(pageName)}</div>
      <hr />
    </div>
  );
};

export default NameHeader;
