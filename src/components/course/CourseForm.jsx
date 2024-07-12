import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

function CourseForm() {
  const navigate = useNavigate();
  // States for a new course - create
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [specialties, setSpecialties] = useState([]);
  const [totalHours, setTotalHours] = useState("");
  const [hoursWeekly, setHoursWeekly] = useState("");

  // States for exising course - update
  const [searchParams] = useSearchParams();
  const courseToUpdateId = searchParams.get("id");
  const [isEditing, setIsEditing] = useState(false);
  const [currentCourse, setCurrentCourse] = useState({});

  useEffect(
    function () {
      if (courseToUpdateId) {
        axios({
          url: `https://timetable-generator-backend.onrender.com/timetable-ai/course/${courseToUpdateId}`,
          // url: `http://localhost:4000/timetable-ai/course/${courseToUpdateId}`,
          method: "PATCH",
        })
          .then((res) => {
            setCurrentCourse(res.data);
            setIsEditing(true);
          })
          .catch((err) => {
            console.log(err);
            setIsEditing(false);
          });
      } else {
        setIsEditing(false);
      }
    },
    [courseToUpdateId]
  );

  const courseName = useRef(null);
  const courseCode = useRef(null);
  const courseSpecialties = useRef(null);
  const courseTotalHours = useRef(null);
  const courseWeeklyHours = useRef(null);

  const timeout = () =>
    setTimeout(() => {
      navigate("/course");
    }, 2000);

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
      // url: `https://timetable-generator-backend.onrender.com/timetable-ai/course`,
      method: "POST",
      data: course,
    })
      .then((res) => {
        alert("Request made successfully");
        timeout();
      })
      .catch((err) => {
        alert("Failed to make request");
        timeout("error");
      });
  }

  function handleUpdateCourse(e) {
    e.preventDefault();

    const course = {
      name: name === "" ? currentCourse.name : name,
      course_code: code === "" ? currentCourse.course_code : code,
      specialties:
        specialties.length === 0
          ? currentCourse.specialties
          : [...currentCourse.specialties, ...specialties],
      total_hours: totalHours === "" ? currentCourse.total_hours : totalHours,
      hours_weekly:
        hoursWeekly === "" ? currentCourse.hours_weekly : hoursWeekly,
    };

    axios({
      url: `http://localhost:4000/timetable-ai/course/${courseToUpdateId}`,
      // url: `https://timetable-generator-backend.onrender.com/timetable-ai/staff/${courseToUpdateId}`,
      method: "PATCH",
      data: course,
    })
      .then((res) => {
        alert("Request made successfully");
        timeout();
      })
      .catch((err) => {
        alert("Failed to make request");
        timeout("error");
      });
  }

  return (
    <div className="form">
      <form className="course-form" onSubmit={handleCreateCourse}>
        <h2>Course Form</h2>
        <div className="course-form-input">
          <label htmlFor="name"> Course Name</label>
          <input
            type="text"
            name="name"
            id="name"
            readOnly={false}
            required={true}
            ref={courseName}
            defaultValue={currentCourse?.name || ""}
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
            ref={courseCode}
            defaultValue={currentCourse?.course_code || ""}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="course-form-input">
          <label htmlFor="title"> Specialties</label>
          <select
            multiple={true}
            name="specialties"
            required={true}
            ref={courseSpecialties}
            id="specialties"
            defaultValue={currentCourse?.specialties || []}
            onChange={(e) => {
              setSpecialties((prevSpe) => [...prevSpe, e.target.value]);
            }}
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
            ref={courseTotalHours}
            id="total-hours"
            defaultValue={currentCourse?.total_hours || ""}
            onChange={(e) => setTotalHours(e.target.value)}
          />
        </div>
        <div className="course-form-input">
          <label htmlFor="weekly-hours">Weekly Hours</label>
          <input
            type="number"
            required={true}
            name="weekly-hours"
            ref={courseWeeklyHours}
            id="weekly-hours"
            defaultValue={currentCourse?.hours_weekly || ""}
            onChange={(e) => setHoursWeekly(e.target.value)}
          />
        </div>
        {isEditing ? (
          <button onClick={handleUpdateCourse}>Update Course</button>
        ) : (
          <button onClick={handleCreateCourse}>Create Course</button>
        )}
      </form>
    </div>
  );
}

export default CourseForm;
