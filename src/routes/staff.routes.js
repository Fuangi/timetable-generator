import { Route, Routes } from "react-router-dom";

function StaffRouter() {
  return (
    <Routes>
      <Route path="/staff" element={<p>Staff</p>}>
        <Route path="new" element={<p>New Staff</p>} />
        <Route path="view/:id" element={<p>View Staff</p>} />
        <Route path="update/:id" element={<p>Update Staff</p>} />
        <Route path="delete/:id" element={<p>Delete Staff</p>} />
      </Route>
    </Routes>
  );
}

export default StaffRouter;
