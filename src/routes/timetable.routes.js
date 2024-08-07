import { Route, Routes } from "react-router-dom";
import { Timetable } from "../screens";
import AllTimetables from "../components/timetable/AllTimetables";
import TimetableView from "../components/timetable/TimetableView";
import CreateTimetable from "../components/timetable/CreateTimetable";

function TimetableRouter() {
  return (
    <Routes>
      <Route path="/timetable" element={<Timetable />}>
        <Route index element={<AllTimetables />} />
        <Route path="new" element={<CreateTimetable />} />
        <Route path="view/" element={<TimetableView />} />
        <Route path="update/" element={<p>Update Timetable</p>} />
        <Route path="delete/" element={<p>Delete Timetable</p>} />
      </Route>
    </Routes>
  );
}

export default TimetableRouter;
