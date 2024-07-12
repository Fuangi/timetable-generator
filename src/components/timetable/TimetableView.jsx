import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import TimetableSlot from "../utils/TimetableSlot";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
];

// The component to be rendered
const component = {
  event: (prop) => {
    return <TimetableSlot course={prop} />;
    // return <div>{prop.title}</div>;
  },
};

function TimetableView() {
  const [timeView, setTimeView] = useState({});
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  const myEvents = [];
  useEffect(
    function () {
      if (id) {
        axios({
          // url: `http://localhost:4000/timetable-ai/timetable/${id}`,
          url: `https://timetable-generator-backend.onrender.com/timetable-ai/timetable/${id}`,
          method: "GET",
        })
          .then((res) => {
            setTimeView(res.data.timetable);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
      }
    },
    [id]
  );

  // const timetable = timeView.timetable;

  console.log(myEvents);

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
