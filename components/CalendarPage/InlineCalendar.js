import { pt } from "date-fns/locale";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InlineCalendar = ({ date, onDateChange, hasEvent }) => {
  registerLocale("pt", pt);

  return (
    <div className="flex justify-left">
      <DatePicker
        selected={date}
        // Diferenciar no calendário os dias que tem evento
        dayClassName={(d) => {
          const dateString = new Date(
            d.getFullYear(),
            d.getMonth(),
            d.getDate()
          ).toLocaleDateString();

          return hasEvent.includes(dateString) &&
            dateString != date.toLocaleDateString()
            ? "bg-green-200 rounded-md"
            : undefined;
        }}
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
