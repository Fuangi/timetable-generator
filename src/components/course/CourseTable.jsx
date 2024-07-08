import TableRow from "../utils/TableRow";

function CourseTable() {
  return (
    <table className="course-table">
      <thead>
        <tr>
          <th>SN</th>
          <th>Course Name</th>
          <th>Level</th>
          <th>Specialties</th>
          <th>Semester</th>
          <th>Hours</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  );
}

export default CourseTable;
