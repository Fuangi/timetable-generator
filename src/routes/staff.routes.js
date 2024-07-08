import { Route, Routes } from "react-router-dom";
import { Staff } from "../screens";
import StaffTable from "../components/staff/StaffTable";
import StaffForm from "../components/staff/StaffForm";

function StaffRouter() {
  return (
    <Routes>
      <Route path="/staff" element={<Staff />}>
        <Route index element={<StaffTable />} />
        <Route path="new" element={<StaffForm />} />
        <Route path="view" element={<p>View Staff</p>} />
        <Route path="update" element={<StaffForm />} />
        <Route path="delete" element={<p>Delete Staff</p>} />
      </Route>
    </Routes>
  );
}

export default StaffRouter;
