import { Route, Routes } from "react-router-dom";
import StaffCourse from "../screens/StaffCourse";
import AssignCourse from "../components/staff-courses/AssignCourse";
import ViewStaffCourse from "../components/staff-courses/ViewStaffCourse";

function StaffCourseRouter() {
  return (
    <Routes>
      <Route path="/staff-course" element={<StaffCourse />} />
      <Route path="assign" element={<AssignCourse />} />
      <Route path="/view" element={<ViewStaffCourse />} />
    </Routes>
  );
}

export default StaffCourseRouter;
