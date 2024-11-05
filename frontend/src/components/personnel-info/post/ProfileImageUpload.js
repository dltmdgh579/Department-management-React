import React from "react";
import styles from "../../../css/personnel/post/Personnel_post.module.css";

const ProfileImageUpload = ({ currentImage, onImageUpload }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      onImageUpload(file, reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.profile}>
      <label htmlFor="imageUpload">
        <img src={currentImage} className={styles.profile_image} alt="프로필" />
      </label>
      <input type="file" id="imageUpload" accept="image/*" onChange={handleChange} className={styles.file_input} />
      <span className={styles.profile_ment}>
        프로필사진을 <br />
        업로드 해주세요
      </span>
    </div>
  );
};

export default ProfileImageUpload;
