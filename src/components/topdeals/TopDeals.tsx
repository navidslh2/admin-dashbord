import { topDealsUsers } from "../../data";
import "./topDeals.scss";
const TopDeals = () => {
  return (
    <div className="topDeals">
      <h3>بیشترین خریدها</h3>
      <div className="list">
        {topDealsUsers.map(item => (
          <div className="userItem" key={item.id}>
            <div className="user">
              <img src={item.img} alt={item.alt} />
              <div className="userContainer">
                <span className="userName">{item.username}</span>
                <span className="email">{item.email}</span>
              </div>
            </div>
            <span className="amount">{item.amount} تومان</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
