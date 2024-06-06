import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

function MyCalendar() {
  return (
    <div style={{ background: "white" }}>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 400, width: 500 }}
      />
    </div>
  );
}

export default MyCalendar;
