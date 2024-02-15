import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../css/personnel/list/Personnel_list_header.module.css";
import FooterNav from "../../FooterNav";
import NameHeader from "../../NameHeader";

const GroupAddPersonnelHeader = (props) => {
  const isAddPage = props.add;

  const genderFilterFunction = props.genderFilterFunction;
  const orderFunction = props.orderFunction;

  const [selectedOrder, setSelectedOrder] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState([
    { gender: "M", isCheck: false },
    { gender: "W", isCheck: false },
  ]);

  useEffect(() => {
    genderFilterFunction(selectedGender);
  }, [selectedGender]);

  useEffect(() => {
    orderFunction(selectedOrder);
  }, [selectedOrder]);

  const findAndSetGender = (gender) => {
    let copy = [...selectedGender];
    if (gender === "M") {
      if (
        selectedGender[0].isCheck === false &&
        selectedGender[1].isCheck === true
      ) {
        copy[0].isCheck = true;
        copy[1].isCheck = false;
      } else if (
        selectedGender[0].isCheck === true &&
        selectedGender[1].isCheck === false
      ) {
        copy[0].isCheck = false;
      } else {
        copy[0].isCheck = true;
      }
    } else {
      if (
        selectedGender[1].isCheck === false &&
        selectedGender[0].isCheck === true
      ) {
        copy[1].isCheck = true;
        copy[0].isCheck = false;
      } else if (
        selectedGender[1].isCheck === true &&
        selectedGender[0].isCheck === false
      ) {
        copy[1].isCheck = false;
      } else {
        copy[1].isCheck = true;
      }
    }
    setSelectedGender(copy);
  };

  const checkGenderFilter = (gender) => {
    findAndSetGender(gender);
  };

  const isGenderCheckFilter = (gender) => {
    for (let i = 0; i < selectedGender.length; i++) {
      if (selectedGender[i].gender === gender && selectedGender[i].isCheck) {
        return true;
      }
    }
    return false;
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const setPlaceHolder = (orderType) => {
    setSelectedOrder(orderType);
    setIsOpen(false);
  };

  const orderDisplay = () => {
    if (selectedOrder === "NAME") return "이름순";
    else if (selectedOrder === "AGE") return "나이순";
  };

  return (
    <div>
      <div className={styles.container}>
        {isAddPage ? null : (
          <div className={styles.post}>
            <Link to="/personnel/post" className={styles.post_link}>
              추가
            </Link>
          </div>
        )}
        <div>
          <div
            onClick={toggleDropdown}
            className={styles.order_dropdown_button}
          >
            {selectedOrder ? orderDisplay() : "정렬"}
          </div>
          {isOpen && (
            <div className={styles.order_type}>
              <div
                onClick={() => {
                  setPlaceHolder("NAME");
                }}
              >
                이름순
              </div>
              <div
                onClick={() => {
                  setPlaceHolder("AGE");
                }}
              >
                나이순
              </div>
            </div>
          )}
        </div>
        <div className={styles.search_container}>
          <input className={styles.search}></input>
        </div>
      </div>
      <div>
        <div className={styles.filter_container}>
          <div
            className={
              isGenderCheckFilter("M") ? styles.check_filter : styles.filter
            }
            onClick={() => checkGenderFilter("M")}
          >
            남자
          </div>
          <div
            className={
              isGenderCheckFilter("W") ? styles.check_filter : styles.filter
            }
            onClick={() => checkGenderFilter("W")}
          >
            여자
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupAddPersonnelHeader;
