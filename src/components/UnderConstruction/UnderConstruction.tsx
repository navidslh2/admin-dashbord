import LinearProgress from "@mui/material/LinearProgress";
import "./UnderConstruction.scss"

const UnderConstruction = () => {
  return (
    <div className="underConstruction">
      <p>این صفحه در حال آماده سازی میباشد</p>
      <div className="linearprogress">
         <LinearProgress />
      </div>
     
    </div>
  );
};

export default UnderConstruction;
