import React, { useState, useEffect } from "react";
import styles from "../../../css/personnel/post/Personnel_post.module.css";

const DEPARTMENT_OPTIONS = [
  { label: "영유치부", value: "KINDERGARTEN" },
  { label: "홀리키즈", value: "HOLY_KIDS" },
  { label: "바울공동체 청소년부", value: "PAUL_COMMUNITY" },
  { label: "여호수아 청년부", value: "JOSHUA" },
];

const DepartmentDropdown = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest(`.${styles.dropdownContainer}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>소속</label>
      <div className={styles.dropdownContainer}>
        <button type="button" className={styles.dropdownButton} onClick={toggleDropdown}>
          <span>{DEPARTMENT_OPTIONS.find((opt) => opt.value === value)?.label || "소속 구분"}</span>
          <svg
            className={`${styles.dropdownIcon} ${isOpen ? styles.rotate : ""}`}
            width="12"
            height="12"
            viewBox="0 0 12 12"
          >
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </button>

        {isOpen && (
          <ul className={styles.dropdownOptions}>
            {DEPARTMENT_OPTIONS.map((option) => (
              <li key={option.value} className={styles.dropdownOption} onClick={() => handleSelect(option)}>
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DepartmentDropdown;
