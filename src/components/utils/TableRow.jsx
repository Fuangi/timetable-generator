import axios from "axios";
import { MdDelete, MdEdit } from "react-icons/md";

function TableRow(data) {
  function handleDeleteRes(id) {
    // Delete resource logic here
    console.log("Deleting resource", id);

    // Confirmation dialog
    if (window.confirm("Are you sure you want to delete this resource?")) {
      // deletion logic
      axios({
        url: `http://localhost:4000/timetable-ai/course/${id}`,
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

  function handleUpdateRes(id) {
    // Update resource logic here
    console.log("Updating resource", id);
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
        <button
          className="update"
          onClick={() => handleUpdateRes(data.data._id)}
        >
          <MdEdit />
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
