import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./areaChartBox.scss";

type ChartItem = {
  name: string;
  mobile: number;
  labtop: number;
  tablet: number;
};
type Props = {
  title: string;
  chartData: ChartItem[];
};

const AreaChartBox = (props: Props) => {
  return (
    <div className="areaChartBox">
      <h3>{props.title}</h3>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={props.chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{background:"transparent", border:"none"}} />
            <Area
              type="monotone"
              dataKey="mobile"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="labtop"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="tablet"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
            <Area
              type="monotone"
              dataKey="pc"
              stackId="1"
              stroke="#ffc658"
              fill="#fcb158"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaChartBox;
