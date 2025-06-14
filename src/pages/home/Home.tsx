import ChartBox from "../../components/chartBox/ChartBox";
import TopDeals from "../../components/topdeals/TopDeals";
import { chartBoxUser } from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopDeals />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">box3</div>
      <div className="box box4">box4</div>
      <div className="box box5">box5</div>
      <div className="box box6">box6</div>
      <div className="box box7">box7</div>
      <div className="box box8">box8</div>
      <div className="box box9">box9</div>
    </div>
  );
};

export default Home;
