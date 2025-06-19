import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  title: string;
  dataKey: string;
  chartData: object[]
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
      <div className="item">
        {props.chartData.map((item, index) => (
          <>
            <div>{item.name}</div>
            <div>{item.value}</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
