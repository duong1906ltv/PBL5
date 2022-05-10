import { NavLink } from "react-router-dom";
import linksMenu from "../utils/linkMenu";
import Wrapper from "../assets/wrappers/Menu";

function Menu() {
  return (
    <Wrapper>
      <div className="menu">
        {linksMenu.map((link) => {
          const { text, path, id, icon } = link;

          return (
            <NavLink
              to={path}
              key={id}
              className="menu-item"
              onClick={() => console.log(id)}
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Menu;
