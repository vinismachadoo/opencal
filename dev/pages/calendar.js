import CalendarPage from "../components/CalendarPage";
import { getTags, getEvents } from "../client/notion";

const calendar = ({ tags, events }) => {
  return <CalendarPage tags={tags} events={events} />;
};

export async function getServerSideProps() {
  const tags = await getTags();
  const events = await getEvents();
  return {
    props: {
      tags,
      events,
    },
  };
}

export default calendar;
