import { Link } from "react-router-dom";

function PageHeader({ pageName, sortBy }) {
  return (
    <div className="page-header">
      <h2>Your {pageName}</h2>
      <div className="page-header-actions">
        <input type="search" placeholder="Search" />
        <select name="sort" id="sort">
          <option value="">Sort By</option>
          {sortBy.map((val) => (
            <option value={val}>{val}</option>
          ))}
        </select>
        <Link to="/staff/new">New</Link>
        <button>Download</button>
      </div>
    </div>
  );
}

export default PageHeader;
