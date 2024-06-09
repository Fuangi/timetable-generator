import { Outlet } from "react-router-dom";
// import CourseTable from "../components/course/CourseTable";
import DashLayout from "../components/dashboard/DashLayout";
import PageHeader from "../components/utils/PageHeader";

function Course() {
  return (
    <DashLayout>
      <div className="course">
        <PageHeader
          pageName="Courses"
          sortBy={["name", "level", "specialty", "semester"]}
        />

        <div className="course-body">
          <Outlet />
        </div>
      </div>
    </DashLayout>
  );
}

export default Course;
