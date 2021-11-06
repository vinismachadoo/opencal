import Header from "./Header";
import InlineCalendar from "./InlineCalendar";
import FilterSection from "./FilterSection";
import { useState, useEffect } from "react";
import CardsSection from "./CardsSection";
import { EVENTOS } from "../../globals";

const index = () => {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [filterStates, setFilterStates] = useState([]);

  useEffect(() => {
    const defaultFilters = [
      { id: 1, name: "Funk", selected: false },
      { id: 2, name: "Pagode", selected: false },
      { id: 3, name: "Eletrônica", selected: false },
      { id: 4, name: "Brasilidades", selected: false },
    ];
    setFilterStates(defaultFilters);
  }, []);

  const eventsToDisplay = EVENTOS.filter((event) => {
    const eventDay = new Date(
      event.startDate.year,
      event.startDate.month - 1,
      event.startDate.day,
      event.startDate.hour,
      event.startDate.minute
    ).getDate();

    const selectedDay = calendarDate.getDate();

    const filterSelectedNames = filterStates
      .filter((filter) => filter.selected)
      .map((filter) => filter.name);

    const tagMatchSelection = filterSelectedNames.filter((value) =>
      event.tags.includes(value)
    ).length;
    return filterSelectedNames.length
      ? eventDay === selectedDay && tagMatchSelection
      : eventDay === selectedDay;
  });

  const daysWithEvents = EVENTOS.map((event) =>
    new Date(
      event.startDate.year,
      event.startDate.month - 1,
      event.startDate.day
    ).toLocaleDateString()
  );

  return (
    <div className="flex">
      {/* Left section */}
      <div className="hidden xl:block w-1/5 mr-4">
        <InlineCalendar
          date={calendarDate}
          onDateChange={setCalendarDate}
          hasEvent={daysWithEvents}
        />
        <FilterSection filters={filterStates} onFilterClick={setFilterStates} />
      </div>
      {/* Main section */}
      <div className="w-full xl:w-4/5">
        <Header date={calendarDate} onDateChange={setCalendarDate} />
        <CardsSection filters={filterStates} events={eventsToDisplay} />
      </div>
    </div>
  );
};

export default index;
