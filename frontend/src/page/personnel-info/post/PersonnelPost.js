import axios from "axios";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../../../css/personnel/post/Personnel_post.module.css";
import ProfileImageUpload from "../../../components/personnel-info/post/ProfileImageUpload";
import FormInput from "../../../components/personnel-info/post/FormInput";
import DepartmentDropdown from "../../../components/personnel-info/post/DepartmentDropdown";
import CustomDatePicker from "../../../components/personnel-info/post/CustomDatePicker";

const API_ROOT = process.env.REACT_APP_API_ROOT;

const DEFAULT_PROFILE_IMAGE = "https://d1qll2sj38w7uy.cloudfront.net/member/default/1.jpg";

const PersonnelPost = () => {
  const navigate = useNavigate();
  const {
    state: { departmentList },
  } = useLocation();

  const [formData, setFormData] = useState({
    profileImage: {
      file: null,
      preview: DEFAULT_PROFILE_IMAGE,
    },
    name: "",
    departmentType: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    workSpace: "",
    address: "",
    family: "",
  });

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (file, preview) => {
    setFormData((prev) => ({
      ...prev,
      profileImage: { file, preview },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = new FormData();
    submitData.append("profileImage", formData.profileImage.file || formData.profileImage.preview);

    const requestDto = {
      name: formData.name,
      departmentType: formData.departmentType,
      dateOfBirth: formData.dateOfBirth,
      phone: formData.phone,
      email: formData.email,
      workSpace: formData.workSpace,
      address: formData.address,
      family: formData.family,
    };

    submitData.append("requestDto", new Blob([JSON.stringify(requestDto)], { type: "application/json" }));

    await axios({
      method: "post",
      url: `${API_ROOT}/personnel/post`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: submitData,
    })
      .then((response) => {
        navigate("/list", { state: departmentList });
      })
      .catch((e) => {
        console.log(e);
        alert("인원 등록에 실패했습니다. 다시 시도해주세요.");
      });
  };

  const inputFields = [
    { label: "이름", name: "name", placeholder: "내용을 입력해 주세요." },
    { label: "연락처", name: "phone", placeholder: "01012345678" },
    { label: "이메일", name: "email", placeholder: "example@domain.com" },
    { label: "학교/직장", name: "workSpace", placeholder: "학교/직장 명을 입력해 주세요." },
    { label: "주소", name: "address", placeholder: "주소를 입력해 주세요." },
    { label: "가족 관계", name: "family", placeholder: "가족 구분" },
  ];

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h1 className={styles.title}>새신자 등록</h1>
      <ProfileImageUpload currentImage={formData.profileImage.preview} onImageUpload={handleImageUpload} />
      <div className={styles.formSection}>
        {inputFields.map((field) => (
          <FormInput
            key={field.name}
            label={field.label}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            required={field.name === "name" || field.name === "phone"}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
          />
        ))}

        <DepartmentDropdown
          value={formData.departmentType}
          onChange={(value) => handleInputChange("departmentType", value)}
        />

        <CustomDatePicker
          label="생년월일"
          selected={formData.dateOfBirth}
          onChange={(date) => handleInputChange("dateOfBirth", date)}
        />
      </div>

      <button type="submit" className={styles.submit}>
        등록하기
      </button>
    </form>
  );
};

export default PersonnelPost;
