import { useEffect, useState } from "react";
import TimetableCard from "./TimetableCard";
import axios from "axios";

function AllTimetables() {
  const [timetables, setTimetables] = useState([]);

  useEffect(function () {
    axios({
      url: "https://timetable-generator-backend.onrender.com/timetable-ai/timetable",
      method: "GET",
    })
      .then((res) => setTimetables(res.data.timetables))
      .catch((err) => console.error(err));
  }, []);

  console.log(timetables);
  return (
    <div className="all-timetables">
      <h3>All your Timetables...</h3>
      <div className="all-timetables-cards">
        {timetables.map((timetable, index) => (
          <TimetableCard key={index} timetable={timetable} />
        ))}
      </div>
    </div>
  );
}

export default AllTimetables;
