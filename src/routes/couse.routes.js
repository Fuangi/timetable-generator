import { Route, Routes } from "react-router-dom";

function CourseRouter() {
  return (
    <Routes>
      <Route path="/course" element={<p>Courses</p>}>
        <Route path="new" element={<p>New Course</p>} />
        <Route path="view/:id" element={<p>View Course</p>} />
        <Route path="update/:id" element={<p>Update Course</p>} />
        <Route path="delete/:id" element={<p>Delete Course</p>} />
      </Route>
    </Routes>
  );
}

export default CourseRouter;
