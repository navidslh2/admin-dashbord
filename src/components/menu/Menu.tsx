import { menu } from "../../data";
import "./menu.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) =>(
          <div className="item" key={item.id}>
            <div className="title">{item.title}</div>
            {item.listItems.map((listItem) => (
                <Link to={listItem.url} className="listItem" key={listItem.id}>
                  <img src={listItem.icon} alt={listItem.alt} />
                  <span>{listItem.title}</span>
                </Link>
              )
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Menu;

