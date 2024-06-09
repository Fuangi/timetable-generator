import CourseRouter from "./couse.routes";
import TimetableRouter from "./timetable.routes";
import StaffRouter from "./staff.routes";
import SettingRouter from "./setting.routes";
import React from "react";
import StaffCourseRouter from "./staff-course.routes";

function MyRoutes() {
  return (
    <React.Fragment>
      <CourseRouter />
      <TimetableRouter />
      <StaffRouter />
      <SettingRouter />
      <StaffCourseRouter />
    </React.Fragment>
  );
}

export default MyRoutes;
