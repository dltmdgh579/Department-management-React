import { useEffect, useRef } from "react";
import styles from "../../../css/department/attendance/Filter_flate.module.css";

const FilterPlate = ({
  genderFilter,
  setGenderFilter,
  orderFilter,
  setOrderFilter,
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
    if (genderFilter === "M") {
      setGenderFilter("");
      return;
    }

    setGenderFilter("M");
  };

  const onclickWoman = () => {
    if (genderFilter === "W") {
      setGenderFilter("");
      return;
    }

    setGenderFilter("W");
  };

  const onclickOrderAttendance = () => {
    if (orderFilter === "ATTENDANCE") {
      setOrderFilter("");
      return;
    }

    setOrderFilter("ATTENDANCE");
  };

  const onclickOrderAge = () => {
    if (orderFilter === "AGE") {
      setOrderFilter("");
      return;
    }

    setOrderFilter("AGE");
  };

  const onclickOrderName = () => {
    if (orderFilter === "NAME") {
      setOrderFilter("");
      return;
    }

    setOrderFilter("NAME");
  };

  return (
    <div className={styles.filter_plate} ref={plateRef}>
      <div className={styles.filter_plate_title}>성별</div>
      <div className={styles.filter_plate_item}>
        <button
          onClick={onclickMan}
          className={genderFilter === "M" ? styles.filter_check : null}
        >
          남자
        </button>
        <button
          onClick={onclickWoman}
          className={genderFilter === "W" ? styles.filter_check : null}
        >
          여자
        </button>
      </div>
      <hr />
      <div className={styles.filter_plate_title}>정렬</div>
      <div className={styles.filter_plate_item}>
        <button
          onClick={onclickOrderAttendance}
          className={orderFilter === "ATTENDANCE" ? styles.filter_check : null}
        >
          출석순
        </button>
        <button
          onClick={onclickOrderAge}
          className={orderFilter === "AGE" ? styles.filter_check : null}
        >
          나이순
        </button>
        <button
          onClick={onclickOrderName}
          className={orderFilter === "NAME" ? styles.filter_check : null}
        >
          이름순
        </button>
      </div>
    </div>
  );
};

export default FilterPlate;
