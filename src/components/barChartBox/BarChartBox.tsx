import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChartBox.scss";

type Props = {
    title: string;
    color : string;
    dataKey : string;
    chartData : object[]
}

const BarChartBox = (props : Props) => {
  return (
    <div className="barChartBox">
      <h3>{props.title}</h3>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart  data={props.chartData}>
            <Bar dataKey={props.dataKey} fill={props.color} />
            <Tooltip 
            contentStyle={{background:"#2a3447", borderRadius:"5px"}}
            labelStyle={{display:"none"}}
            cursor={{fill:'none'}}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;


