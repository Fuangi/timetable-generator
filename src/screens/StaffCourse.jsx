import { useState } from "react";
import DashLayout from "../components/dashboard/DashLayout";

function StaffCourse() {
  const [courses, setCourses] = useState([]);
  const [lecturer, setlecturer] = useState("");

  function handleAssignCourses(e) {
    e.preventDefault();
    const assign = {
      courses,
      lecturer,
    };

    console.log(assign);
  }
  return (
    <DashLayout>
      <h2>Assign Course(s) to Staff</h2>
      <div className="assign-course">
        <div className="assign-info">
          <h3>Guidelines on assigning courses</h3>
          <ol>
            <li>
              You can assign multiple courses to 1 teacher just by selecting the
              courses
            </li>
          </ol>
        </div>

        <form className="assign-form">
          <h3>Assign Course</h3>
          <div className="assign-form-input">
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
              <option value="chem">Chem</option>
              <option value="bio">Bio</option>
              <option value="phy">Phy</option>
              <option value="math">Maths</option>
            </select>
          </div>
          <div className="assign-form-input">
            <label htmlFor="course">Lecturer</label>
            <select
              id="lecturer"
              name="lecturer"
              value={lecturer}
              onChange={(e) => setlecturer(e.target.value)}
            >
              <option value="">Select Course</option>
              <option value="chem">Chem</option>
              <option value="bio">Bio</option>
              <option value="phy">Phy</option>
              <option value="math">Maths</option>
            </select>
          </div>

          <button onClick={handleAssignCourses}>Assign Course(s)</button>
        </form>
      </div>
    </DashLayout>
  );
}

export default StaffCourse;
