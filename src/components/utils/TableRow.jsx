import { MdDelete, MdEdit } from "react-icons/md";

function TableRow(data, index) {
  return (
    <tr>
      <td>1</td>
      <td>Vanessa</td>
      <td>Fuangi</td>
      <td>try@gmail.com</td>
      <td>123435676</td>
      <td>Buea</td>
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
