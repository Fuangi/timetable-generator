import { Route, Routes } from "react-router-dom";
import { Staff } from "../screens";
import StaffTable from "../components/staff/StaffTable";

function StaffRouter() {
  return (
    <Routes>
      <Route path="/staff" element={<Staff />}>
        <Route index element={<StaffTable />} />
        <Route path="new" element={<StaffTable />} />
        <Route path="view/:id" element={<p>View Staff</p>} />
        <Route path="update/:id" element={<p>Update Staff</p>} />
        <Route path="delete/:id" element={<p>Delete Staff</p>} />
      </Route>
    </Routes>
  );
}

export default StaffRouter;
