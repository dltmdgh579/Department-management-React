import React from "react";
import styles from "../../../css/personnel/post/Personnel_post.module.css";

const FormInput = ({ label, name, placeholder, value, onChange, required = false }) => {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label} htmlFor={name}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
