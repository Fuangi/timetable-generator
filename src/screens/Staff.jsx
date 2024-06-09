import { Outlet } from "react-router-dom";
import DashLayout from "../components/dashboard/DashLayout";
import PageHeader from "../components/utils/PageHeader";

function Staff() {
  return (
    <DashLayout>
      <div className="course">
        <PageHeader
          pageName="Staffs"
          sortBy={["first", "last", "email", "address"]}
        />

        <div className="course-body">
          <Outlet />
        </div>
      </div>
    </DashLayout>
  );
}

export default Staff;
