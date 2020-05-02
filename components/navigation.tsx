import * as React from "react";

import { GlobalContext } from "../context/global";

function setCategory(category: string) {
  console.log("attempting to dispatch");
  return { type: "category", payload: category.toLowerCase() };
}

const NavigationItem = ({ category }) => {
  const { dispatch } = React.useContext(GlobalContext);

  const handleClick = React.useCallback(
    (event: React.MouseEvent) => {
      dispatch(setCategory(category));
    },
    [category]
  );

  return (
    <GlobalContext.Consumer>
      {({ state }) => (
        <li
          onClick={handleClick}
          className={state.category === category.toLowerCase() ? "current" : ""}
        >
          {category}
        </li>
      )}
    </GlobalContext.Consumer>
  );
};

const Navigation = () => {
  const tabs = ["Pizza", "Steak", "All"];

  return (
    <nav>
      <ul>
        {tabs.map((tab) => (
          <NavigationItem category={tab} key={tab}></NavigationItem>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
