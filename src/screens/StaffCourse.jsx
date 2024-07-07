import DashLayout from "../components/dashboard/DashLayout";
import { Link, Outlet } from "react-router-dom";

function StaffCourse() {
  return (
    <DashLayout>
      <Link to="/staff-course/assign">Assign Course</Link>
      <Outlet />
    </DashLayout>
  );
}

export default StaffCourse;
