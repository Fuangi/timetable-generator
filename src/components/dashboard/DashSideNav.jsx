import { NavLink } from "react-router-dom";

function DashSideNav() {
  return (
    <div className="dash-sidenav">
      <h2>Timetabler</h2>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/course">Course</NavLink>
        </li>
        <li>
          <NavLink to="/staff">Staff</NavLink>
        </li>
        <li>
          <NavLink to="/staff-course">Assign Courses</NavLink>
        </li>
        <li>
          <NavLink to="/timetable">Timetable</NavLink>
        </li>
        <li>
          <NavLink to="/setting">Setting</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default DashSideNav;
