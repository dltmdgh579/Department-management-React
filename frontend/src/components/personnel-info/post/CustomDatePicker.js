import React from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../../../css/personnel/post/Personnel_post.module.css";

const CustomDatePicker = ({ label, selected, onChange }) => {
  const today = new Date();
  const formattedToday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(
    today.getDate(),
  ).padStart(2, "0")}`;

  const handleDateChange = (date) => {
    const formattedDate = date
      ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(
          2,
          "0",
        )}`
      : "";
    onChange(formattedDate);
  };

  const selectedDate = selected ? new Date(selected) : null;

  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>{label}</label>
      <div className={styles.datePickerWrapper}>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          locale={ko}
          placeholderText={formattedToday}
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
          maxDate={new Date()}
          className={styles.datePickerInput}
          popperClassName={styles.datePickerPopper}
          dayClassName={(date) => styles.datePickerDay}
        />
        <svg className={styles.calendarIcon} width="14" height="14" viewBox="0 0 16 16">
          <path
            d="M5 0V1H11V0H13V1H15C15.6 1 16 1.4 16 2V15C16 15.6 15.6 16 15 16H1C0.4 16 0 15.6 0 15V2C0 1.4 0.4 1 1 1H3V0H5ZM14 15V5H2V15H14Z"
            fill="#718096"
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomDatePicker;
