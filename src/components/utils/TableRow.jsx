import { MdDelete, MdEdit } from "react-icons/md";

function TableRow(data) {
  return (
    <tr>
      <td>{data.index + 1}</td>
      <td>{data.data.course_code}</td>
      <td>{data.data.name}</td>
      <td>{data.data.hours_weekly}</td>
      <td>{data.data.total_hours}</td>
      <td>
        {data.data.specialties.map((spe, i) => (
          <span key={i} className="specialty">
            {spe}
          </span>
        ))}
      </td>
      <td>
        <button className="delete">
          <MdDelete />
        </button>
        <button className="update">
          <MdEdit />
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
