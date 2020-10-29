import React from "react";
import { shallow } from "enzyme";
import OrderSummary from "./OrderSummary";
import { inventory, listItems as listNames } from "../../../shared/testData";

const purchaseCancelled = jest.fn();
const purchaseContinued = jest.fn();

const props = {
  inventory,
  listNames,
  price: 999,
  purchaseCancelled,
  purchaseContinued,
};

describe("Shallow Render OrderSummary component", () => {
  it("renders Heading", () => {
    const wrapper = shallow(<OrderSummary {...props} />);
    expect(wrapper.find("h3").text()).toContain("Vaše objednávka");
  });

  it("renders Danger button", () => {
    const wrapper = shallow(<OrderSummary {...props} />);
    expect(wrapper.find({ btnType: "Danger" }).text()).toContain("<button />");
  });

  it("renders Success button", () => {
    const wrapper = shallow(<OrderSummary {...props} />);
    expect(wrapper.find({ btnType: "Success" }).text()).toContain("<button />");
  });

  it("renders Sum", () => {
    const wrapper = shallow(<OrderSummary {...props} />);
    expect(wrapper.find("p").find(".OrderPrice").first().text()).toContain(
      "36"
    );
  });

  it("renders price", () => {
    const wrapper = shallow(<OrderSummary {...props} />);
    expect(wrapper.find(".OrderPrice").last().text()).toContain("999.00");
  });

  it("renders shop items", () => {
    const wrapper = shallow(<OrderSummary {...props} />);
    expect(wrapper.find(".OrderBox").children()).toHaveLength(8);
  });

  it("renders 2 buttons", () => {
    const wrapper = shallow(<OrderSummary {...props} />);
    expect(wrapper.find("button")).toHaveLength(2);
  });

  it("Match Snapshot of OrderSummary component", () => {
    const wrapper = shallow(<OrderSummary {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
