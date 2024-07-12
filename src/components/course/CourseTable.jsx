import { useEffect, useState } from "react";
import TableRow from "../utils/TableRow";
import axios from "axios";

function CourseTable() {
  const [courses, setCourses] = useState([]);

  useEffect(function () {
    axios({
      // url: "http://localhost:4000/timetable-ai/course",
      url: `https://timetable-generator-backend.onrender.com/timetable-ai/course`,
      method: "GET",
    })
      .then((res) => setCourses(res.data))
      .catch((err) => console.log("Failed to create", err));
  }, []);

  return (
    <table className="course-table">
      <thead>
        <tr>
          <th>SN</th>
          <th>Course Code</th>
          <th>Course Name</th>
          <th>Hours/Week</th>
          <th>Total Hours</th>
          <th>Specialties</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {courses.length > 0 ? (
          courses?.map((course, i) => (
            <TableRow key={i} index={i} data={course} />
          ))
        ) : (
          <tr>
            <td colSpan={7}>No Courses found in the database!</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default CourseTable;
