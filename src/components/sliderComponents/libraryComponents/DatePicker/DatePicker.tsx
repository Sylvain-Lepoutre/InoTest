import { useEffect, useState, useRef } from "react";
import dayjs from "dayjs";
import { useLiveRegion } from "@components/LiveRegion";

import { generateDate, months } from "../../../../util/Calendar";

export default function DatePicker() {
  const days = ["D", "L", "M", "M", "J", "V", "S"];
  const [today] = useState(dayjs());
  const [calendarDate, setCalendarDate] = useState(dayjs());
  const [calendarData, setCalendarData] = useState([] as Array<{ date: dayjs.Dayjs; classes: string }>);
  const ref = useRef<HTMLButtonElement>(null);

  const { setAssertiveMessage } = useLiveRegion();

  useEffect(() => {
    const monthClasses = (isCurrentMonth: boolean) =>
      isCurrentMonth ? "hover:bg-black hover:text-white cursor-pointer" : "text-gray-400 cursor-not-allowed";
    const todayClasses = (isToday: boolean) => (isToday ? "bg-red-600 text-white" : "");

    const calendarData = generateDate({ month: calendarDate.month(), year: calendarDate.year() }).map(
      ({ date, currentMonth, today }) => {
        return {
          date,
          classes: [
            monthClasses(currentMonth),
            todayClasses(today),
            "h-10 w-10 grid place-content-center rounded-full transition-all",
          ].join(" "),
        };
      }
    );

    setCalendarData(calendarData);
    setAssertiveMessage(`${today.format("DD/MM/YYYY")}`);
  }, [calendarDate, today]);

  return (
    <div className="flex w-1/2 mx-auto divide-x-2 gap-10 h-screen item-center">
      <div className="w-96 h-96 bg-slate-200 rounded ">
        <div ref={ref} aria-live="polite" role="status" className="flex justify-between p-5 bg-slate-300">
          <button
            className="scale-[0.3] w-10"
            onClick={() => {
              setCalendarDate(calendarDate.subtract(1, "year"));
            }}
          >
            <img src="/double-left-arrow.svg" alt="" />
          </button>
          <button
            className="scale-[0.3] w-10"
            onClick={() => {
              setCalendarDate(calendarDate.subtract(1, "month"));
            }}
          >
            <img src="/left-arrow.svg" alt="" />
          </button>
          <div className="text-normal flex flex-col justify-center w-[10rem] mt-3 ">
            <span className="font-bold">
              {months[calendarDate.month()]}&nbsp;
              {calendarDate.year()}
            </span>
            <button
              className="scale-[0.8] bg-slate-200 rounded-lg p-1 w-20 mt-2 mb-4 "
              onClick={() => {
                setCalendarDate(today);
              }}
            >
              Today
            </button>
            <span className="font-bold">{today.format("DD/MM/YYYY")}</span>
          </div>
          <button
            className="scale-[0.3] w-10"
            onClick={() => {
              setCalendarDate(calendarDate.add(1, "month"));
            }}
          >
            <img src="/right-arrow.svg" alt="" />
          </button>
          <button
            className="scale-[0.3] w-10"
            onClick={() => {
              setCalendarDate(calendarDate.add(1, "year"));
            }}
          >
            <img src="/double-right-arrow.svg" alt="" />
          </button>
        </div>
        <div className="w-full text-center grid grid-cols-7 ">
          {days.map((day, index) => {
            return (
              <h1 key={index} className="h-14 grid content-center text-sm">
                {day}
              </h1>
            );
          })}
        </div>
        <div className="w-full grid grid-cols-7 text-grey-500 bg-slate-200 rounded">
          {calendarData.map(({ date, classes }, index) => {
            return (
              <div key={index} className="h-14 border-t grid">
                <h1 className={classes} style={{ minWidth: "2rem" }}>
                  {date.date()}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
