import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

function TimetableView() {
  return (
    <div>
      <div className="timetable-calendar">
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
}

export default TimetableView;
