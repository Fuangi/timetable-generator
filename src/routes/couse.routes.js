import { Route, Routes } from "react-router-dom";
import { Course } from "../screens";
import CourseForm from "../components/course/CourseForm";
import CourseTable from "../components/course/CourseTable";

function CourseRouter() {
  return (
    <Routes>
      <Route path="/course" element={<Course />}>
        <Route index element={<CourseTable />} />
        {/* <Route path="view" element={<CourseTable />} /> */}
        <Route path="new" element={<CourseForm />} />
        <Route path="view/:id" element={<p>View Course</p>} />
        <Route path="update/:id" element={<p>Update Course</p>} />
        <Route path="delete/:id" element={<p>Delete Course</p>} />
      </Route>
    </Routes>
  );
}

export default CourseRouter;
