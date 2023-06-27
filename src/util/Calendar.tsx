import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advanced from "dayjs/plugin/advancedFormat";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advanced);

export const generateDate = ({
  month = dayjs().month(),
  year = dayjs().year(),
}): Array<{ currentMonth: boolean; date: dayjs.Dayjs; today?: boolean }> => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  const arrayOfDate = [];

  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    arrayOfDate.push({ currentMonth: false, date: firstDateOfMonth.date(i) });
  }

  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      currentMonth: true,
      today: firstDateOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString(),
      date: firstDateOfMonth.date(i),
    });
  }

  const remainingDays = 42 - arrayOfDate.length;
  for (let i = lastDateOfMonth.date() + 1; i <= lastDateOfMonth.date() + remainingDays; i++) {
    arrayOfDate.push({
      currentMonth: false,
      date: lastDateOfMonth.date(i),
    });
  }

  return arrayOfDate;
};

export const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
