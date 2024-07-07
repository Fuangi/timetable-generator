import { Route, Routes } from "react-router-dom";
import StaffCourse from "../screens/StaffCourse";
import AssignCourse from "../components/staff-courses/AssignCourse";
import ViewStaffCourse from "../components/staff-courses/ViewStaffCourse";

function StaffCourseRouter() {
  return (
    <Routes>
      <Route path="/staff-course" element={<StaffCourse />}>
        <Route path="view" element={<ViewStaffCourse />} />
        <Route path="assign" element={<AssignCourse />} />
      </Route>
    </Routes>
  );
}

export default StaffCourseRouter;
