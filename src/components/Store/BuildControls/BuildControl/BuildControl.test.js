import React from "react";
import { shallow } from "enzyme";
import BuildControl from "./BuildControl";

const added = jest.fn();
const removed = jest.fn();

const props = {
  label: "Label-test",
  disabled: false,
  added,
  removed,
  price: 99,
};

describe("Shallow Render BuildControl component", () => {
  it("renders Label", () => {
    const wrapper = shallow(<BuildControl {...props} />);
    expect(wrapper.find(".Label").text()).toContain("Label-test");
  });

  it("renders - button", () => {
    const wrapper = shallow(<BuildControl {...props} />);
    expect(wrapper.find(".Less").text()).toContain("-");
  });

  it("renders + button", () => {
    const wrapper = shallow(<BuildControl {...props} />);
    expect(wrapper.find(".More").text()).toContain("+");
  });
  it("renders price", () => {
    const wrapper = shallow(<BuildControl {...props} />);
    expect(wrapper.find(".Price").text()).toContain("99");
  });

  it("renders 2 buttons", () => {
    const wrapper = shallow(<BuildControl {...props} />);
    expect(wrapper.find("button")).toHaveLength(2);
  });

  it("Match Snapshot of BuildControl component", () => {
    const wrapper = shallow(<BuildControl {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
