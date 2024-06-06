import DashSideNav from "./DashSideNav";

function DashLayout({ children }) {
  return (
    <div className="dash-layout">
      <DashSideNav />
      <main className="dashbody">{children}</main>
    </div>
  );
}

export default DashLayout;
