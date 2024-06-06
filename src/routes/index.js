import CourseRouter from "./couse.routes";
import TimetableRouter from "./timetable.routes";
import StaffRouter from "./staff.routes";
import SettingRouter from "./setting.routes";
import React from "react";

function MyRoutes() {
  return (
    <React.Fragment>
      <CourseRouter />
      <TimetableRouter />
      <StaffRouter />
      <SettingRouter />
    </React.Fragment>
  );
}

export default MyRoutes;
