import Header from "./Header";
import InlineCalendar from "./InlineCalendar";
import FilterSection from "./FilterSection";
import { useState, useEffect } from "react";
import CardsSection from "./CardsSection";

const index = ({ tags, events }) => {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [filterStates, setFilterStates] = useState([]);

  const eventsToDisplay = events.filter((ev) => {
    // event date
    const evDate = new Date(ev.startDate).setHours(0, 0, 0, 0);
    // selected date on calendar click
    const selectedDate = new Date(calendarDate).setHours(0, 0, 0, 0);
    // array of filters' names selected on the left section
    const selectedFilters = filterStates
      .filter((filter) => filter.selected)
      .map((filter) => filter.name);
    // lenght of the match array of tags selected and event tags
    const tagMatchSelection = selectedFilters.filter((value) =>
      ev.tags.includes(value)
    ).length;
    // return all events of the day if no tag selected, otherwise filter by tag as well
    return selectedFilters.length
      ? evDate === selectedDate && tagMatchSelection
      : evDate === selectedDate;
  });

  useEffect(() => {
    setFilterStates(
      tags.map((tag) => {
        return { ...tag, selected: false };
      })
    );
  }, []);

  const daysWithEvents = events.map((ev) =>
    new Date(ev.startDate).setHours(0, 0, 0, 0)
  );

  return (
    <div className="flex">
      {/* Left section */}
      <div className="hidden lg:block w-64 pr-3 mr-4">
        <InlineCalendar
          date={calendarDate}
          onDateChange={setCalendarDate}
          hasEvent={daysWithEvents}
        />
        <FilterSection filters={filterStates} onFilterClick={setFilterStates} />
      </div>
      {/* Main section */}
      <div className="w-full">
        <Header
          date={calendarDate}
          onDateChange={setCalendarDate}
          hasEvent={daysWithEvents}
        />
        <CardsSection filters={filterStates} events={eventsToDisplay} />
      </div>
    </div>
  );
};

export default index;
