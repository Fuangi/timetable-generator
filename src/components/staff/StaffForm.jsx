import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

function StaffForm() {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [matricule, setMatricule] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [searchParams] = useSearchParams();
  const staffToUpdateId = searchParams.get("id");
  const [isEditing, setIsEditing] = useState(false);
  const [currentStaff, setCurrentStaff] = useState({});

  useEffect(
    function () {
      if (staffToUpdateId) {
        axios({
          url: `http://localhost:4000/timetable-ai/staff/${staffToUpdateId}`,
          method: "PATCH",
        })
          .then((res) => {
            setCurrentStaff(res.data);
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
    [staffToUpdateId]
  );

  const timeout = () =>
    setTimeout(() => {
      navigate("/staff");
    }, 2000);

  function handleCreateStaff(e) {
    e.preventDefault();

    const staff = {
      firstname,
      lastname,
      matricule,
      email,
      phone,
      address,
    };

    axios({
      url: "http://localhost:4000/timetable-ai/staff",
      // url: `https://timetable-generator-backend.onrender.com/timetable-ai/staff/`,
      method: "POST",
      data: staff,
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

  function handleUpdateStaff(e) {
    e.preventDefault();

    const staff = {
      firstname: firstname === "" ? currentStaff.firstname : firstname,
      lastname: lastname === "" ? currentStaff.lastname : lastname,
      matricule: matricule === "" ? currentStaff.matricule : matricule,
      email: email === "" ? currentStaff.email : email,
      phone: phone === "" ? currentStaff.phone : phone,
      address: address === "" ? currentStaff.address : address,
    };

    axios({
      url: `http://localhost:4000/timetable-ai/staff/${staffToUpdateId}`,
      // url: `https://timetable-generator-backend.onrender.com/timetable-ai/staff/${staffToUpdateId}`,
      method: "PATCH",
      data: staff,
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
      <form className="course-form">
        <h2>Staff Form</h2>
        <div className="course-form-input">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            required={true}
            defaultValue={currentStaff?.firstname || ""}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="course-form-input">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            required={true}
            defaultValue={currentStaff?.lastname || ""}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="course-form-input">
          <label htmlFor="matricule">Matricule</label>
          <input
            type="text"
            name="matricule"
            required={true}
            defaultValue={currentStaff?.matricule || ""}
            onChange={(e) => setMatricule(e.target.value)}
          />
        </div>
        <div className="course-form-input">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            required={true}
            defaultValue={currentStaff?.email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="course-form-input">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            required={true}
            defaultValue={currentStaff?.phone || ""}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="course-form-input">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            required={true}
            defaultValue={currentStaff?.address || ""}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {isEditing ? (
          <button onClick={handleUpdateStaff}>Update Staff</button>
        ) : (
          <button onClick={handleCreateStaff}>Create Staff</button>
        )}
      </form>
    </div>
  );
}

export default StaffForm;
