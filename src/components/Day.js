const Day = () => {
  const date = new Date();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = dayNames[date.getDay()];
  const month = monthName[date.getMonth()];
  const number = date.getDate();
  const year = date.getFullYear();
  return (
    <div className="date">
      <span>{day + ", " + month + " " + number + ", " + year}</span>
    </div>
  );
};
export default Day;
