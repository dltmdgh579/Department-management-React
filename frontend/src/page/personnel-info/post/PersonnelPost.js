import React, { useState } from "react";
import axios from "axios";
import styles from "../../../css/personnel/post/Personnel_post.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import { format } from "date-fns";

const API_ROOT = process.env.REACT_APP_API_ROOT;

const PersonnelPost = () => {
  const location = useLocation();
  const departmentList = location.state?.departmentList;

  const navigate = useNavigate();

  const [uploadImageUrl, setUploadImageUrl] = useState(
    "https://d1qll2sj38w7uy.cloudfront.net/member/default/1.jpg",
  );
  const [screenUploadImageUrl, setScreenUploadImageUrl] = useState(
    "https://d1qll2sj38w7uy.cloudfront.net/member/default/1.jpg",
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("소속 구분");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [info, setInfo] = useState({
    name: "",
    departmentType: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    workSpace: "",
    address: "",
    family: "",
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDepartmentType = (departmentType) => {
    setInfo({
      ...info,
      ["departmentType"]: departmentType,
    });
  };

  const setPlaceHolder = (departmentType) => {
    setSelectedDepartment(departmentType);
    setIsOpen(false);
  };

  const handleSelectedDate = (date) => {
    setSelectedDate(date);
    setInfo({
      ...info,
      ["dateOfBirth"]: format(date, "yyyy-MM-dd"),
    });
  };

  const changeValue = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const postRequest = async () => {
    const formData = new FormData();
    formData.append("profileImage", uploadImageUrl);
    formData.append(
      "requestDto",
      new Blob([JSON.stringify(info)], { type: "application/json" }),
    );

    await axios({
      method: "post",
      url: `${API_ROOT}/personnel/post`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    }).then((response) => {
      navigate("/list", { state: departmentList });
    });
  };

  const onChangeImageUpload = (e) => {
    const uploadFile = e.target.files[0];
    setUploadImageUrl(uploadFile);
    setScreenUploadImageUrl(uploadFile);
    const reader = new FileReader();
    console.log(uploadFile);
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      setScreenUploadImageUrl(reader.result);
    };
  };

  return (
    <div className={styles.container}>
      <div>
        <img src={screenUploadImageUrl} className={styles.profile_image}></img>
        <input type="file" accept="image/*" onChange={onChangeImageUpload} />
      </div>
      <div>이름</div>
      <input
        placeholder="내용을 입력해 주세요."
        onChange={changeValue}
        name="name"
      ></input>
      <div>
        <div>소속</div>
        <div className={styles.department_dropdown}>
          <div
            onClick={toggleDropdown}
            className={styles.department_dropdown_button}
          >
            {selectedDepartment}
          </div>
          {isOpen && (
            <div className={styles.department_type}>
              <div
                onClick={() => {
                  handleDepartmentType("KINDERGARTEN");
                  setPlaceHolder("영유치부");
                }}
              >
                영유치부
              </div>
              <div
                onClick={() => {
                  handleDepartmentType("HOLY_KIDS");
                  setPlaceHolder("홀리키즈");
                }}
              >
                홀리키즈
              </div>
              <div
                onClick={() => {
                  handleDepartmentType("PAUL_COMMUNITY");
                  setPlaceHolder("바울공동체 청소년부");
                }}
              >
                바울공동체 청소년부
              </div>
              <div
                onClick={() => {
                  handleDepartmentType("JOSHUA");
                  setPlaceHolder("여호수아 청년부");
                }}
              >
                여호수아 청년부
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        생년월일
        <DatePicker
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
          dateFormat="yyyy.MM.dd" // 날짜 형태
          shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
          minDate={new Date("1970-01-01")} // minDate 이전 날짜 선택 불가
          maxDate={new Date()} // maxDate 이후 날짜 선택 불가
          selected={selectedDate}
          locale={ko}
          onChange={(date) => handleSelectedDate(date)}
        />
      </div>
      <div>연락처</div>
      <input
        placeholder="01012345678"
        onChange={changeValue}
        name="phone"
      ></input>
      <div>이메일</div>
      <input
        placeholder="example@domain.com"
        onChange={changeValue}
        name="email"
      ></input>
      <div>학교/직장</div>
      <input
        placeholder="학교/직장 명을 입력해 주세요."
        onChange={changeValue}
        name="workSpace"
      ></input>
      <div>주소</div>
      <input
        placeholder="주소를 입력해 주세요."
        onChange={changeValue}
        name="phone"
      ></input>
      <div>가족 관계</div>
      <input
        placeholder="가족 구분"
        onChange={changeValue}
        name="family"
      ></input>
      <div className={styles.submit} onClick={postRequest}>
        완료
      </div>
    </div>
  );
};

export default PersonnelPost;
