import { useState } from "react";

function CourseForm() {
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");
  const [specialty, setSpecialty] = useState([]);
  const [program, setProgram] = useState([]);
  const [semester, setSemester] = useState("");
  const [hours, setHours] = useState("");

  function handleCreateCourse(e) {
    e.preventDefault();
    console.log("Submitted!");
  }

  return (
    <div className="form">
      <form className="course-form" onSubmit={handleCreateCourse}>
        <h2>Create Course</h2>
        <div className="course-form-input">
          <label htmlFor="title"> Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="course-form-input">
          <label htmlFor="title">Levels</label>
          <input
            type="text"
            name="level"
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
        </div>
        <div className="course-form-input">
          <label htmlFor="title"> Specialty</label>
          <select
            multiple={true}
            size={1}
            name="specialty"
            id="specialty"
            value={specialty}
            onChange={(e) =>
              setSpecialty((prevSpe) => [...prevSpe, e.target.value])
            }
          >
            <option value="GWD">GWD</option>
            <option value="ITS">ITS</option>
            <option value="SWE">SWE</option>
          </select>
        </div>
        <div className="course-form-input">
          <label htmlFor="title"> Program</label>
          <select
            multiple={true}
            name="program"
            id="program"
            value={program}
            onChange={(e) =>
              setProgram((prevProgs) => [...prevProgs, e.target.value])
            }
          >
            {/* <option value="">Seclect Specialty</option> */}
            <option value="GWD">GWD</option>
            <option value="ITS">ITS</option>
            <option value="SWE">SWE</option>
          </select>
        </div>
        <div className="course-form-input">
          <label htmlFor="title">Semester</label>
          <input
            type="text"
            name="semester"
            id="semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          />
        </div>
        <div className="course-form-input">
          <label htmlFor="title">Hours</label>
          <input
            type="text"
            name="hours"
            id="hours"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </div>
        <button>Create</button>
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
