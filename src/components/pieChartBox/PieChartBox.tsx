import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss"

type ChartItem = {
  name: string,
  value: number,
  color: string
}
type Props = {
  title: string;
  dataKey: string;
  chartData: ChartItem[]
};

const PieChartBox = (props: Props) => {
  return (
    <div className="pieChartBox">
      <h3>{props.title}</h3>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={props.chartData}
              innerRadius={"70%"}
              outerRadius={"90%"}
              fill="#8884d8"
              paddingAngle={5}
              dataKey={props.dataKey}
            >
              {props.chartData.map((item, index) => {
                return <Cell key={index} fill={item.color} />;
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="items">
        {props.chartData.map((item, index) => (
          <div className="item" key={index}>
            <div className="title">
              <div className="dot"  style={{background:item.color}}/>
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
