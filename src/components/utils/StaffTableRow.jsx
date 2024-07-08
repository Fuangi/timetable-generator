import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";

function StaffTableRow(data, index) {
  const navigate = useNavigate();
  const url = `/staff/update/?id=${data?.data._id}`;

  function handleDeleteRes(id) {
    // Delete resource logic here
    console.log("Deleting resource", id);

    // Confirmation dialog
    if (window.confirm("Are you sure you want to delete this resource?")) {
      // deletion logic
      axios({
        url: `http://localhost:4000/timetable-ai/staff/${id}`,
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
      <td>{index + 1}</td>
      <td>{data.data.firstname}</td>
      <td>{data.data.lastname}</td>
      <td>{data.data.matricule}</td>
      <td>{data.data.email}</td>
      <td>{data.data.phone}</td>
      <td>{data.data.address}</td>

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

export default StaffTableRow;
