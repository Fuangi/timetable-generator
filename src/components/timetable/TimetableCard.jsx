import { Link } from "react-router-dom";

function TimetableCard({ timetable }) {
  return (
    <Link className="card-link" to={`/timetable/view?id=${timetable._id}`}>
      <div className="timetable-card">
        <div className="head">
          <h3>View Timetable</h3>
          <p>Click here to view</p>
        </div>
        {/* <div className="body">
          {timetable.schedule.map((course, index) => (
            <p key={index}>{course.course.name}</p>
          ))}
        </div> */}
      </div>
    </Link>
  );
}

export default TimetableCard;
