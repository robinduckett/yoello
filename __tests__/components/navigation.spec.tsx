import * as React from "react";
import { mount } from "enzyme";
import Navigation from "../../components/navigation";
import { GlobalContext } from "../../context/global";
import { reducer } from "../../context/reducer";

beforeEach(() => {
  jest.resetModules();
});

function Provider({ children, initialState }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

describe("Navigation Component", () => {
  it("should render without throwing an error", function () {
    const wrap = mount(
      <Provider initialState={{ category: "pizza" }}>
        <Navigation />
      </Provider>
    );
    expect(wrap.find("li").first().text()).toBe("Pizza");
  });

  it("should render with a different current category when the state is set", () => {
    const wrap = mount(
      <Provider initialState={{ category: "steak" }}>
        <Navigation />
      </Provider>
    );
    expect(wrap.find("li.current").text()).toBe("Steak");
  });
});
