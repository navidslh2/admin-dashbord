import type { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import { rows } from "../../data";

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: "id",
    headerName: "ردیف",
    width: 60,
  },
  {
    field: "profile",
    headerName: "پروفایل",
    width: 90,
    renderCell: (params) => {
      return <img src={params.row.profile} alt="profile" />;
    },
  },
  {
    field: "firstName",
    headerName: "نام",
    width: 120,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "نام خانوادگی",
    width: 120,
    editable: true,
  },
  {
    field: "age",
    headerName: "سن",
    type: "string",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "نام و نام خانوادگی",
    sortable: false,
    width: 150,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];



const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h3>Users</h3>
        <button>Add New User</button>
      </div>
      <DataTable columns={columns} rows={rows} />
    </div>
  )
}

export default Users
