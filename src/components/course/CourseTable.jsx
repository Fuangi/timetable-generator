import { useEffect, useState } from "react";
import TableRow from "../utils/TableRow";
import axios from "axios";

function CourseTable() {
  const [courses, setCourses] = useState([]);

  useEffect(function () {
    axios({
      url: "http://localhost:4000/timetable-ai/course",
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
        {courses?.map((course, i) => (
          <TableRow key={i} index={i} data={course} />
        ))}
      </tbody>
    </table>
  );
}

export default CourseTable;
