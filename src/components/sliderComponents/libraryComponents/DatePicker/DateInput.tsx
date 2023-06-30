import { useRef, useState } from "react";
import DatePicker from "./DatePicker";
import useOuterClick from "../../../../hook/useOuterClick";

export default function DateInput() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const clickRef = useRef(null);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const closeDatePicker = () => {
    setShowDatePicker(false);
  };

  useOuterClick(clickRef, closeDatePicker);

  return (
    <div className="relative h-fit">
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleDatePicker();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setShowDatePicker(!showDatePicker);
          }
        }}
      >
        <img
          src="/calendar.svg"
          alt="Calendar"
          className="absolute left-[10rem] top-[1.1rem] scale-[60%] transform -translate-y-1/2 w-6 h-6"
        />
      </button>
      <input
        ref={clickRef}
        type="text"
        value="Choisissez une date"
        onClick={(e) => {
          e.stopPropagation();
          toggleDatePicker();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setShowDatePicker(!showDatePicker);
          }
        }}
        onChange={() => {
          console.log("todo");
        }}
        role="button"
        aria-haspopup="true"
        aria-expanded={showDatePicker}
        aria-label="Choisissez une date"
        className="px-4 py-2 pr-10 rounded-lg w-[12rem] border-2 sm:text-xs border-gray-700 focus:outline-none focus:border-blue-500"
      />
      {showDatePicker && (
        <div className="absolute">
          <DatePicker />
        </div>
      )}
    </div>
  );
}
