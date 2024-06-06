import { MdDelete, MdEdit } from "react-icons/md";

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
        <tr>
          <td>1</td>
          <td>Vanessa</td>
          <td>Fuangi</td>
          <td>try@gmail.com</td>
          <td>123435676</td>
          <td>Buea</td>
          <td>
            <button className="delete">
              <MdDelete />
            </button>
            <button className="update">
              <MdEdit />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CourseTable;
