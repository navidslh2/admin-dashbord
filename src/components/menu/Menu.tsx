import { useState } from "react";
import { menu } from "../../data";
import "./menu.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [active, setActive] = useState(null)
  return (
    <div className="menu">
      {menu.map((item) =>(
          <div className="item" key={item.id}>
            <div className="title">{item.title}</div>
            {item.listItems.map((listItem) => (
                <NavLink to={listItem.url} className="listItem" key={listItem.id}
                >
                  <img src={listItem.icon} alt={listItem.alt} />
                  <span>{listItem.title}</span>
                </NavLink>
              )
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Menu;

