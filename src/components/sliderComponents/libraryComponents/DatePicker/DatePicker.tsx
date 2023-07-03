import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { generateDate, months } from "../../../../util/Calendar";
import { DateButton } from "./DateButton";
import { Composite } from "@components/Composite";

export default function DatePicker() {
  const days = ["D", "L", "M", "M", "J", "V", "S"];
  const [today] = useState(dayjs());
  const [calendarDate, setCalendarDate] = useState(dayjs());
  const [calendarData, setCalendarData] = useState([] as Array<{ date: dayjs.Dayjs; classes: string }>);

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
            "h-8 w-8 grid place-content-center rounded-full transition-all",
          ].join(" "),
        };
      }
    );

    setCalendarData(calendarData);
  }, [calendarDate, today]);

  return (
    <div className="w-64 h-auto bg-slate-200">
      <Composite role="menubar">
        <div role="menubar" className="flex justify-between p-3 bg-slate-300 rounded-sm">
          <DateButton
            style="scale-[0.4] w-6 hover:scale-[0.5] transition-all ease-in-out"
            ariaLabel="année précédente"
            onClick={(e) => {
              e.stopPropagation();
              setCalendarDate(calendarDate.subtract(1, "year"));
            }}
          >
            <img src="/double-left-arrow.svg" alt="" />
          </DateButton>
          <DateButton
            style="scale-[0.4] w-6 hover:scale-[0.5] transition-all ease-in-out"
            ariaLabel="mois précédent"
            onClick={(e) => {
              e.stopPropagation();
              setCalendarDate(calendarDate.subtract(1, "month"));
            }}
          >
            <img src="/left-arrow.svg" alt="" />
          </DateButton>

          <div role="menubar" className="text-normal flex flex-col justify-center items-center w-[8rem] mt-2">
            <span className="font-bold text-sm">
              {months[calendarDate.month()]}&nbsp;
              {calendarDate.year()}
            </span>
            <DateButton
              style="scale-[0.6] bg-slate-100 hover:bg-slate-500 hover:text-white transition-all rounded-lg p-1 w-[10rem] "
              ariaLabel="revenir au jour actuel"
              onClick={(e) => {
                e.stopPropagation();
                setCalendarDate(today);
              }}
            >
              Date du jour
            </DateButton>
            <span aria-hidden="true" className="font-bold text-sm">
              {today.format("DD/MM/YYYY")}
            </span>
            <span className="sr-only">Nous sommes le : {today.format("DD/MM/YYYY")}</span>
          </div>
          <DateButton
            style="scale-[0.4] w-6 hover:scale-[0.5] transition-all ease-in-out"
            ariaLabel="mois suivant"
            onClick={(e) => {
              e.stopPropagation();
              setCalendarDate(calendarDate.add(1, "month"));
            }}
          >
            <img src="/right-arrow.svg" alt="" />
          </DateButton>
          <DateButton
            style="scale-[0.4] w-6 hover:scale-[0.5] transition-all ease-in-out"
            ariaLabel="année suivante"
            onClick={(e) => {
              e.stopPropagation();
              setCalendarDate(calendarDate.add(1, "year"));
            }}
          >
            <img src="/double-right-arrow.svg" alt="" />
          </DateButton>
        </div>
      </Composite>
      <div className="w-full text-center grid grid-cols-7">
        {days.map((day, index) => {
          return (
            <h1 key={index} className="h-8 grid content-center text-xs">
              {day}
            </h1>
          );
        })}
      </div>
      <div className="w-full grid grid-cols-7 text-xs text-gray-500 bg-slate-200 px-1 ">
        {calendarData.map(({ date, classes }, index) => (
          <div key={index} className="h-9  border-t grid">
            <h1 className={classes} style={{ minWidth: "1.5rem" }}>
              {date.date()}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
