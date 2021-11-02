import { pt } from "date-fns/locale";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const InlineCalendar = ({ date, onDateChange }) => {
  registerLocale("pt", pt);

  return (
    <div className="flex justify-center">
      <DatePicker
        selected={date}
        inline
        fixedHeight
        locale="pt"
        onChange={(d) => onDateChange(d)}
        todayButton="Hoje"
      />
    </div>
  );
};

export default InlineCalendar;
