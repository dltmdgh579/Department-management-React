import { useEffect, useRef } from "react";
import styles from "../../../css/department/attendance/Filter_flate.module.css";

const FilterPlate = ({
  isMan,
  setIsMan,
  isWoman,
  setIsWoman,
  isOrderAttendance,
  setIsOrderAttendance,
  isOrderAge,
  setIsOrderAge,
  isOrderName,
  setIsOrderName,
  onClose,
}) => {
  const plateRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (plateRef.current && !plateRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const onclickMan = () => {
    setIsMan(!isMan);

    if (isWoman) {
      setIsWoman(false);
    }
  };

  const onclickWoman = () => {
    setIsWoman(!isWoman);

    if (isMan) {
      setIsMan(false);
    }
  };

  const onclickOrderAttendance = () => {
    setIsOrderAttendance(!isOrderAttendance);
  };

  const onclickOrderAge = () => {
    setIsOrderAge(!isOrderAge);
  };

  const onclickOrderName = () => {
    setIsOrderName(!isOrderName);
  };

  return (
    <div className={styles.filter_plate} ref={plateRef}>
      <div className={styles.filter_plate_title}>성별</div>
      <div className={styles.filter_plate_item}>
        <button
          onClick={onclickMan}
          className={isMan ? styles.filter_check : null}
        >
          남자
        </button>
        <button
          onClick={onclickWoman}
          className={isWoman ? styles.filter_check : null}
        >
          여자
        </button>
      </div>
      <hr />
      <div className={styles.filter_plate_title}>정렬</div>
      <div className={styles.filter_plate_item}>
        <button
          onClick={onclickOrderAttendance}
          className={isOrderAttendance ? styles.filter_check : null}
        >
          출석순
        </button>
        <button
          onClick={onclickOrderAge}
          className={isOrderAge ? styles.filter_check : null}
        >
          나이순
        </button>
        <button
          onClick={onclickOrderName}
          className={isOrderName ? styles.filter_check : null}
        >
          이름순
        </button>
      </div>
    </div>
  );
};

export default FilterPlate;
