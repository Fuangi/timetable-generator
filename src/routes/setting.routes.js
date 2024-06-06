import { Route, Routes } from "react-router-dom";

function SettingRouter() {
  return (
    <Routes>
      <Route path="/setting" element={<p>Settings</p>}>
        <Route path="new" element={<p>New Setting</p>} />
        <Route path="view/:id" element={<p>View Setting</p>} />
        <Route path="update/:id" element={<p>Update Setting</p>} />
        <Route path="delete/:id" element={<p>Delete Setting</p>} />
      </Route>
    </Routes>
  );
}

export default SettingRouter;
