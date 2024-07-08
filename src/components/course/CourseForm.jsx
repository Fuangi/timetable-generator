import { useState } from "react";
import axios from "axios";

function CourseForm() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [specialties, setSpecialties] = useState([]);
  const [totalHours, setTotalHours] = useState("");
  const [hoursWeekly, setHoursWeekly] = useState("");

  function handleCreateCourse(e) {
    e.preventDefault();

    const course = {
      name,
      course_code: code,
      specialties,
      total_hours: totalHours,
      hours_weekly: hoursWeekly,
    };

    axios({
      url: "http://localhost:4000/timetable-ai/course",
      method: "POST",
      data: course,
    })
      .then((res) => console.log("Successful", res))
      .catch((err) => console.log("Failed to create", err));
  }

  return (
    <div className="form">
      <form className="course-form" onSubmit={handleCreateCourse}>
        <h2>Create Course</h2>
        <div className="course-form-input">
          <label htmlFor="name"> Course Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="course-form-input">
          <label htmlFor="name"> Course Code</label>
          <input
            type="text"
            name="code"
            id="code"
            required={true}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="course-form-input">
          <label htmlFor="title"> Specialties</label>
          <select
            multiple={true}
            size={1}
            name="specialties"
            required={true}
            id="specialties"
            value={specialties}
            onChange={(e) =>
              setSpecialties((prevSpe) => [...prevSpe, e.target.value])
            }
          >
            <option value="GWD">GWD</option>
            <option value="ITS">ITS</option>
            <option value="SWE">SWE</option>
          </select>
        </div>
        <div className="course-form-input">
          <label htmlFor="title">Total Hours</label>
          <input
            type="number"
            name="total-hours"
            required={true}
            id="total-hours"
            value={totalHours}
            onChange={(e) => setTotalHours(e.target.value)}
          />
        </div>
        <div className="course-form-input">
          <label htmlFor="weekly-hours">Weekly Hourse</label>
          <input
            type="number"
            required={true}
            name="weekly-hours"
            id="weekly-hours"
            value={hoursWeekly}
            onChange={(e) => setHoursWeekly(e.target.value)}
          />
        </div>
        <button>Create Course</button>
      </form>
      <div className="form-instruction">
        <h2>Instructions on filling the form</h2>
        <ol>
          <li>
            For the course specialty, input the specialty code - SWE, GWD, etc.{" "}
          </li>
          <li>The course specialties should be separated by commas </li>
        </ol>
      </div>
    </div>
  );
}

export default CourseForm;
