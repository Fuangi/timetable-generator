import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";

function TableRow(data) {
  const navigate = useNavigate();
  const url = `/course/update/?id=${data.data._id}`;

  function handleDeleteRes(id) {
    // Delete resource logic here
    console.log("Deleting resource", id);

    // Confirmation dialog
    if (window.confirm("Are you sure you want to delete this resource?")) {
      // deletion logic
      axios({
        // url: `http://localhost:4000/timetable-ai/course/${id}`,
        url: `https://timetable-generator-backend.onrender.com/timetable-ai/course/${id}`,
        method: "DELETE",
      })
        .then((res) => {
          alert("Deleted successfully");
          window.location.reload();
        })
        .catch((err) => console.log("Failed to create", err));
    } else {
      alert("Cancelled, resource not deleted");
    }
  }

  return (
    <tr>
      <td>{data.index + 1}</td>
      <td>{data.data.course_code}</td>
      <td>{data.data.name}</td>
      <td>{data.data.hours_weekly}</td>
      <td>{data.data.total_hours}</td>
      <td>
        {data.data.specialties.map((spe, i) => (
          <span key={i} className="specialty">
            {spe}
          </span>
        ))}
      </td>
      <td>
        <button
          className="delete"
          onClick={() => handleDeleteRes(data.data._id)}
        >
          <MdDelete />
        </button>
        <button className="update" onClick={() => navigate(url)}>
          <MdEdit />
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
