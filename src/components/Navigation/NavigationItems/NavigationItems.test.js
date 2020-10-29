import React from "react";
import { shallow } from "enzyme";
import NavigationItems from "./NavigationItems";

const props = {
  isAuthenticated: true,
};

const falseProps = {
  isAuthenticated: false,
};

describe("Renders NavigationItems", () => {
  it("renders homepage link", () => {
    const wrapper = shallow(<NavigationItems {...props} />);
    expect(wrapper.find({ link: "/" }).text()).toEqual("<NavigationItem />");
  });

  it("renders orders link", () => {
    const wrapper = shallow(<NavigationItems {...props} />);
    expect(wrapper.find({ link: "/orders" }).text()).toEqual(
      "<NavigationItem />"
    );
  });

  it("hides orders link", () => {
    const wrapper = shallow(<NavigationItems {...falseProps} />);
    expect(wrapper.find({ link: "/orders" })).toEqual({});
  });

  it("renders logout link", () => {
    const wrapper = shallow(<NavigationItems {...props} />);
    expect(wrapper.find({ link: "/logout" }).text()).toEqual(
      "<NavigationItem />"
    );
  });

  it("renders NavigationItems component", () => {
    const wrapper = shallow(<NavigationItems {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
