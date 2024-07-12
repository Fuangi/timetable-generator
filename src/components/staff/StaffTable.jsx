import axios from "axios";
import { useEffect, useState } from "react";
import StaffTableRow from "../utils/StaffTableRow";

function StaffTable() {
  const [staffs, setStaffs] = useState([]);

  useEffect(function () {
    axios({
      // url: "http://localhost:4000/timetable-ai/staff",
      url: `https://timetable-generator-backend.onrender.com/timetable-ai/staff`,
      method: "GET",
    })
      .then((res) => {
        setStaffs(res.data);
      })
      .catch((err) => console.log("Failed to create", err));
  }, []);

  return (
    <table className="course-table">
      <thead>
        <tr>
          <th>SN</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Matricule</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {staffs.length > 0 ? (
          staffs.map((staff, i) => (
            <StaffTableRow key={i} data={staff} index={i} />
          ))
        ) : (
          <tr>
            <td colSpan={8}>No staffs found, please try again later</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default StaffTable;
