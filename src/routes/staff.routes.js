import { Route, Routes } from "react-router-dom";
import { Staff } from "../screens";

function StaffRouter() {
  return (
    <Routes>
      <Route path="/staff" element={<Staff />}>
        <Route path="new" element={<p>New Staff</p>} />
        <Route path="view/:id" element={<p>View Staff</p>} />
        <Route path="update/:id" element={<p>Update Staff</p>} />
        <Route path="delete/:id" element={<p>Delete Staff</p>} />
      </Route>
    </Routes>
  );
}

export default StaffRouter;
