import React from "react";
import { shallow } from "enzyme";
import SideDrawer from "./SideDrawer";

const closed = jest.fn();

const props = {
  isAuth: true,
  open: true,
  closed,
};

describe("Renders SideDrawer", () => {
  it("renders logo", () => {
    const wrapper = shallow(<SideDrawer {...props} />);
    expect(wrapper.find(".Logo").text()).toEqual("<logo />");
  });

  it("renders NavigationItems", () => {
    const wrapper = shallow(<SideDrawer {...props} />);
    expect(wrapper.find("nav").text()).toEqual("<NavigationItems />");
  });

  it("renders SideDrawer component", () => {
    const wrapper = shallow(<SideDrawer {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
