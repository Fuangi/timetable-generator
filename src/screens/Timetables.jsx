import { Outlet } from "react-router-dom";
import DashLayout from "../components/dashboard/DashLayout";
import PageHeader from "../components/utils/PageHeader";

function Timetable() {
  return (
    <DashLayout>
      <div className="course timetable">
        <PageHeader
          pageName="Timetables"
          sortBy={["level", "specialty", "period"]}
          url="/timetable/new"
        />
      </div>
      <div className="course-body">
        <Outlet />
      </div>
    </DashLayout>
  );
}

export default Timetable;
