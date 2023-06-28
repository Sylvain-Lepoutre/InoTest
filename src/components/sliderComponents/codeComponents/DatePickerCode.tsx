export default `import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useLiveRegion } from "@components/LiveRegion";
import { generateDate, months } from "../../../../util/Calendar";
import { DateButton } from "./DateButton";
import { Composite } from "@components/Composite";

export default function DatePicker() {
  const days = ["D", "L", "M", "M", "J", "V", "S"];
  const [today] = useState(dayjs());
  const [calendarDate, setCalendarDate] = useState(dayjs());
  const [calendarData, setCalendarData] = useState([] as Array<{ date: dayjs.Dayjs; classes: string }>);

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
  }, [calendarDate, today]);

  return (
    <div className="w-80 h-80 bg-slate-200">
      <Composite role="menubar">
        <div role="menubar" className="flex justify-between p-5 bg-slate-300 rounded-sm">
          <DateButton
            style="scale-[0.4] w-10 hover:scale-[0.5] transition-all ease-in-out"
            ariaLabel="année précédente"
            onClick={() => {
              setCalendarDate(calendarDate.subtract(1, "year"));
            }}
          >
            <img src="/double-left-arrow.svg" alt="" />
          </DateButton>
          <DateButton
            style="scale-[0.4] w-10 hover:scale-[0.5] transition-all ease-in-out"
            ariaLabel="mois précédente"
            onClick={() => {
              setCalendarDate(calendarDate.subtract(1, "month"));
            }}
          >
            <img src="/left-arrow.svg" alt="" />
          </DateButton>

          <div role="menubar" className="text-normal flex flex-col justify-center items-center w-[10rem] mt-3">
            <span className="font-bold">
              {months[calendarDate.month()]}&nbsp;
              {calendarDate.year()}
            </span>
            <DateButton
              style="scale-[0.8] bg-slate-100 hover:bg-slate-500 hover:text-white transition-all rounded-lg p-1 w-28 mt-2 mb-4"
              ariaLabel="revenir au jour actuel"
              onClick={() => {
                setCalendarDate(today);
              }}
            >
              Date du jour
            </DateButton>
            <span className="font-bold">{today.format("DD/MM/YYYY")}</span>
          </div>
          <DateButton
            style="scale-[0.4] w-10 hover:scale-[0.5] transition-all ease-in-out"
            ariaLabel="mois suivant"
            onClick={() => {
              setCalendarDate(calendarDate.add(1, "month"));
            }}
          >
            <img src="/right-arrow.svg" alt="" />
          </DateButton>
          <DateButton
            style="scale-[0.4] w-10 hover:scale-[0.5] transition-all ease-in-out"
            ariaLabel="année suivante"
            onClick={() => {
              setCalendarDate(calendarDate.add(1, "year"));
            }}
          >
            <img src="/double-right-arrow.svg" alt="" />
          </DateButton>
        </div>
      </Composite>
      <div className="w-full text-center grid grid-cols-7 ">
        {days.map((day, index) => {
          return (
            <h1 key={index} className="h-14 grid content-center text-sm">
              {day}
            </h1>
          );
        })}
      </div>
      <div className="w-full grid grid-cols-7 text-xs text-grey-500 bg-slate-200 rounded-sm">
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
  );
}
`;
