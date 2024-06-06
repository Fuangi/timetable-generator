import CourseHeader from "../components/course/CourseHeader";
import CourseTable from "../components/course/CourseTable";
import DashLayout from "../components/dashboard/DashLayout";

function Course() {
  return (
    <DashLayout>
      <div className="course">
        <CourseHeader />

        <div className="course-body">
          <CourseTable />
        </div>
      </div>
    </DashLayout>
  );
}

export default Course;
