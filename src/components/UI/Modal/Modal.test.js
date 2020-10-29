import React from "react";
import { shallow } from "enzyme";
import Modal from "./Modal";

const props = {
  show: true,
  modalClosed: false,
};

const closedProps = {
  show: false,
  modalClosed: false,
};

describe("Shallow Render Modal component", () => {
  it("renders backdrop", () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find("Fragment").text()).toContain("<backdrop />");
  });

  it("renders Modal", () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find({ className: "Modal" })).toHaveLength(1);
  });

  it("shows opacity and transform", () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(
      wrapper.find({
        style: {
          opacity: "1",
          transform: "translateY(0)",
        },
      })
    ).toHaveLength(1);
  });

  it("hides opacity and transform", () => {
    const wrapper = shallow(<Modal {...closedProps} />);
    expect(
      wrapper.find({
        style: {
          opacity: "0",
          transform: "translateY(-100vh)",
        },
      })
    ).toHaveLength(1);
  });

  it("Match Snapshot of Modal component", () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
