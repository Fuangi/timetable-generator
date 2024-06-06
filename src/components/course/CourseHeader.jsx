function CourseHeader() {
  return (
    <div className="course-header">
      <h2>Your Courses</h2>
      <div className="course-header-actions">
        <input type="search" />
        <select name="sort" id="sort">
          <option value="">Sort by</option>
          <option value="">Name</option>
          <option value="">Level by</option>
          <option value="">Specialty</option>
          <option value="">Semester</option>
        </select>
        <button>New</button>
        <button>Download</button>
      </div>
    </div>
  );
}

export default CourseHeader;
