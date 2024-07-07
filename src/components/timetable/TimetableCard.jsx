import { Link } from "react-router-dom";

function TimetableCard() {
  return (
    <Link className="card-link" to="/timetable/view">
      <div className="timetable-card">
        <div className="head">
          <h3>Timetable title</h3>
          <p>level, specialty</p>
        </div>
        <div className="body">
          <p> 🏠 10 courses</p>
          <p> 🧑‍🏫 8 lecturers</p>
          <p> ⌛ 5 days</p>
          <p> ⏲️ 30 hours</p>
        </div>
        <div className="progress">
          <p>weekly progress</p>
        </div>
      </div>
    </Link>
  );
}

export default TimetableCard;
