import dayjs from "dayjs";

export const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  const arrayOfDate = [];

  // Create prefix dates
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    arrayOfDate.push({ currentMonth: false, date: firstDateOfMonth.date(i).toDate() });
  }

  // Generate current month dates
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      currentMonth: true,
      today: firstDateOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString(),
      date: firstDateOfMonth.date(i).toDate(),
    });
  }

  const remainingDays = 42 - arrayOfDate.length;

  // Create suffix dates
  for (let i = 1; i <= remainingDays; i++) {
    arrayOfDate.push({ currentMonth: false, date: lastDateOfMonth.date() + i });
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
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
