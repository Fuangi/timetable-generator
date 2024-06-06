import { Link } from "react-router-dom";

function CourseHeader() {
  return (
    <div className="course-header">
      <h2>Your Courses</h2>
      <div className="course-header-actions">
        <input type="search" placeholder="Search" />
        <select name="sort" id="sort">
          <option value="">Sort by</option>
          <option value="">Name</option>
          <option value="">Level by</option>
          <option value="">Specialty</option>
          <option value="">Semester</option>
        </select>
        <Link to="/course/new">New</Link>
        <button>Download</button>
      </div>
    </div>
  );
}

export default CourseHeader;
