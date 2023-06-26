import { useState } from "react";
import dayjs from "dayjs";
import { generateDate, months } from "../../../util/Calendar";
import { cn } from "../../../util/cn.js";

export default function DatePicker() {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);

  return (
    <div className="flex w-1/2 mx-auto divide-x-2 gap-10 h-screen item-center">
      <div className="w-96 h-96">
        <div>
          <h1>{months[today.month()]}</h1>
        </div>
        <div className="w-full grid grid-cols-7">
          {days.map((day, index) => {
            return (
              <h1 key={index} className="h-14 grid content-center text-sm">
                {day}
              </h1>
            );
          })}
        </div>
        <div className="w-full grid grid-cols-7 text-grey-500">
          {generateDate().map(({ date, currentMonth, today }, index) => {
            return (
              <div key={index} className="h-14 border-t grid content-center">
                <h1
                  className={cn(
                    currenMonth ? "" : "text-gray-400",
                    today ? "bg-red-600 text-white" : "",
                    "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer"
                  )}
                >
                  {date.date()}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-96 w-96 px-5 ">
        <h1>Schedule for anytime </h1>
        <p>No meetings for today</p>
      </div>
    </div>
  );
}
