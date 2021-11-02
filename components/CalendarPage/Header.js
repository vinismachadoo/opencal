import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { pt } from "date-fns/locale";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const header = ({ date, onDateChange }) => {
  registerLocale("pt", pt);

  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  return (
    <>
      <div className="flex space-x-3 xl:space-x-0">
        {/* Arrow left button */}
        <button
          type="button"
          onClick={() =>
            onDateChange(new Date(date.setDate(date.getDate() - 1)))
          }
          className="xl:hidden inline-flex items-center px-2 py-2 border border-gray-300 rounded-md shadow-sm text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <ChevronLeftIcon className="h-4 w-4 md:h-5 md:w-5" />
        </button>
        {/* Main header to show date */}
        <button
          className="flex flex-col w-full px-2 py-2 items-center border border-gray-300 rounded-md shadow-sm text-xs md:text-sm font-semibold text-gray-700 lg:cursor-default"
          onClick={() => setIsOpenCalendar(!isOpenCalendar)}
        >
          {date.toLocaleDateString("pt-BR", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </button>
        {/* Arrow right button */}
        <button
          type="button"
          onClick={() =>
            onDateChange(new Date(date.setDate(date.getDate() + 1)))
          }
          className="xl:hidden inline-flex items-center px-2 py-2 border border-gray-300 rounded-md shadow-sm text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <ChevronRightIcon className="h-4 w-4 md:h-5 md:w-5" />
        </button>
      </div>
      {/* Calendar picker on smaller devices */}
      <div className="block xl:hidden h-0">
        {isOpenCalendar && (
          <DatePicker
            popperModifiers={[
              {
                name: "offset",
                options: {
                  offset: [0, -18],
                },
              },
            ]}
            fixedHeight
            selected={date}
            onCalendarClose={() => setIsOpenCalendar(false)}
            closeOnScroll={true}
            locale="pt"
            onChange={(d) => onDateChange(d)}
            showPopperArrow={false}
            startOpen={true}
            popperPlacement="bottom"
            todayButton="Hoje"
            customInput={<></>}
          />
        )}
      </div>
    </>
  );
};

export default header;
