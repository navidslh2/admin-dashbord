import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import "./dataTable.scss";

type Props = {
  columns: GridColDef[];
  rows: object[];
};

const DataTable = (props: Props) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "90%",
        margin: "auto",
      }}
    >
      <DataGrid
        className="dataTable"
        rows={props.rows}
        columns={props.columns}
        pagination
        slotProps={{
          pagination: {
            className: "pagination",
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default DataTable;
