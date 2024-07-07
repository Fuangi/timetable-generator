import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import TimetableSlot from "./TimetableSlot";

const localizer = momentLocalizer(moment);

const events = [
  {
    start: moment("2024-07-07T09:30:00").toDate(), //for today's date
    end: moment("2024-07-07T10:30:00").toDate(),
    title: "My first event",
    data: {
      type: "resting", //regular
    },
  },
  {
    start: moment("2024-07-08T20:00:00").toDate(), //for today's date
    end: moment("2024-07-08T23:30:00").toDate(),
    title: "Learn React",
    data: {
      type: "studying", //appointment
    },
  },
  {
    start: moment("2024-07-09T02:00:00").toDate(), //for today's date
    end: moment("2024-07-09T05:30:00").toDate(),
    title: "Data Analysis with Python",
    data: {
      type: "class", //appointment
    },
  },
  {
    start: moment("2024-07-10T16:00:00").toDate(), //for today's date
    end: moment("2024-07-10T18:30:00").toDate(),
    title: "Play Games and Snack",
    data: {
      type: "others", //appointment
    },
  },
  /*   {
    start: storedValue.eventStart,
    end: storedValue.eventEnd,
    title: storedValue.eventName,
    data: storedValue.data,
  }, */
];

// The component to be rendered
const component = {
  event: (prop) => {
    return <TimetableSlot course={prop} />;
    // return <div>{prop.title}</div>;
  },
};

function TimetableView() {
  return (
    <div>
      <div className="timetable-calendar">
        <Calendar
          localizer={localizer}
          startAccessor="start"
          components={component}
          defaultView="week"
          endAccessor="end"
          style={{ height: "100%", width: "100%" }}
          events={events}
        />
      </div>
    </div>
  );
}

export default TimetableView;
