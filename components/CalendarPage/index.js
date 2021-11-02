import Header from "./Header";
import InlineCalendar from "./InlineCalendar";
import FilterSection from "./FilterSection";
import { useState } from "react";
import CardsSection from "./CardsSection";

const index = () => {
  const [calendarDate, setCalendarDate] = useState(new Date());

  return (
    <div className="flex">
      {/* Left section */}
      <div className="hidden xl:block w-1/5 mr-4">
        <InlineCalendar date={calendarDate} onDateChange={setCalendarDate} />
        <FilterSection />
      </div>
      {/* Main section */}
      <div className="w-full xl:w-4/5">
        <Header date={calendarDate} onDateChange={setCalendarDate} />
        <CardsSection />
      </div>
    </div>
  );
};

export default index;
