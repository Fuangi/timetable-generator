import axios from "axios";
import { useEffect, useState } from "react";

function AssignCourse() {
  const [courses, setCourses] = useState([]);
  const [staff, setStaff] = useState("");
  const [allCourses, setAllCourses] = useState([]);
  const [allStaffs, setAllStaffs] = useState([]);

  useEffect(function () {
    axios({
      url: "http://localhost:4000/timetable-ai/course",
      method: "GET",
    }).then((res) => setAllCourses(res.data));
  }, []);

  useEffect(function () {
    axios({
      url: "http://localhost:4000/timetable-ai/staff",
      method: "GET",
    }).then((res) => setAllStaffs(res.data));
  }, []);

  function handleAssignCourses(e) {
    e.preventDefault();
    const assign = {
      courses,
      staff,
    };

    console.log(assign);

    axios({
      url: "http://localhost:4000/timetable-ai/course_staff",
      method: "POST",
      data: assign,
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }
  return (
    <div className="form">
      <form className="course-form">
        <h2>Assign Course</h2>
        <div className="course-form-input">
          <label htmlFor="course">Courses</label>
          <select
            id="course"
            name="course"
            multiple={true}
            value={courses}
            onChange={(e) =>
              setCourses((prevCourses) => [...prevCourses, e.target.value])
            }
          >
            <option value="">Select Course</option>
            {allCourses?.length > 0 &&
              allCourses.map((course, i) => (
                <option key={i} value={course._id}>
                  {course.name}
                </option>
              ))}
          </select>
        </div>
        <div className="course-form-input">
          <label htmlFor="course">Lecturer</label>
          <select
            id="lecturer"
            name="lecturer"
            required={true}
            value={staff}
            onChange={(e) => setStaff(e.target.value)}
          >
            <option value="">Select Staff</option>
            {allStaffs?.length > 0 &&
              allStaffs.map((staff, i) => (
                <option key={i} value={staff._id}>
                  {staff.firstname} {staff.lastname}
                </option>
              ))}
          </select>
        </div>

        <button onClick={handleAssignCourses}>Assign Course(s)</button>
      </form>
    </div>
  );
}

export default AssignCourse;
