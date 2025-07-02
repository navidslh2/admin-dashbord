

import ChartBox from "../../components/chartBox/ChartBox";
import TopDeals from "../../components/topdeals/TopDeals";
import { areaChartBoxRevenue, barChartBoxProfit, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser, pieChartBoxSell } from "../../data";
import "./home.scss";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import AreaChartBox from "../../components/areaChartbox/AreaChartBox";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopDeals />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox {...pieChartBoxSell}/>
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box7">
        <AreaChartBox  {...areaChartBoxRevenue}/>
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit}/>
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxProfit} />
      </div>
    </div>
  );
};

export default Home;
