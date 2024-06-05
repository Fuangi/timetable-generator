function TimetableCard() {
  return (
    <div className="timetable-card">
      <div className="head">
        <h3>Timetable title</h3>
        <p>level</p>
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
  );
}

export default TimetableCard;
