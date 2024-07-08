import { Link } from "react-router-dom";

function PageHeader({ pageName, sortBy, url }) {
  function handleDownload() {
    window.print();
  }
  return (
    <div className="page-header onDownload">
      <h2>Your {pageName}</h2>
      <div className="page-header-actions">
        <input type="search" placeholder="Search" />
        <select name="sort" id="sort">
          <option value="">Sort By</option>
          {sortBy.map((val, i) => (
            <option value={val} key={i}>
              {val}
            </option>
          ))}
        </select>
        <Link to={url}>New</Link>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
}

export default PageHeader;
