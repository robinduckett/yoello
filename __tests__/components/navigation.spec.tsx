import * as React from "react";
import { mount } from "enzyme";
import Navigation from "../../components/navigation";
import { GlobalContext } from "../../context/global";

beforeEach(() => {
  jest.resetModules();
});

describe("Navigation Component", () => {
  it("should render without throwing an error", function () {
    const wrap = mount(
      <GlobalContext.Provider
        value={{ state: { category: "pizza" }, dispatch: jest.fn() }}
      >
        <Navigation />
      </GlobalContext.Provider>
    );
    expect(wrap.find("li").first().text()).toBe("Pizza");
  });
});
