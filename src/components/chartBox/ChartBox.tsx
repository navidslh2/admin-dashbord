import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import "./chartBox.scss";

type Props = {
    color:string;
    icon:string;
    alt:string;
    title:string;
    dataKey:string;
    number: number | string;
    percentage: number;
    chartData: object[];
}
const ChartBox = (props:Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt={props.alt} />
          <span>{props.title}</span>
        </div>
        <h3>{props.number}</h3>
        <Link to="/" className="link" style={{color:props.color}}>
          مشاهده همه
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart  data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{x:40, y:60}}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage" style={{color:props.percentage>0?"limegreen":"tomato"}}>{props.percentage}%</span>
          <span className="duration">ماه جاری</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
