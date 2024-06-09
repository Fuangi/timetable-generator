import TimetableCard from "./TimetableCard";

function AllTimetables() {
  return (
    <div className="all-timetables">
      <h3>All your Timetables...</h3>
      <div className="all-timetables-cards">
        <TimetableCard />
        <TimetableCard />
        <TimetableCard />
        <TimetableCard />
        <TimetableCard />
        <TimetableCard />
        <TimetableCard />
        <TimetableCard />
      </div>
    </div>
  );
}

export default AllTimetables;
