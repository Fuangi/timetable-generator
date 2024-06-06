import { Route, Routes } from "react-router-dom";
import { Timetable } from "../screens";

function TimetableRouter() {
  return (
    <Routes>
      <Route path="/timetable" element={<Timetable />}>
        <Route path="new" element={<p>New Timetable</p>} />
        <Route path="view/:id" element={<p>View Timetable</p>} />
        <Route path="update/:id" element={<p>Update Timetable</p>} />
        <Route path="delete/:id" element={<p>Delete Timetable</p>} />
      </Route>
    </Routes>
  );
}

export default TimetableRouter;
