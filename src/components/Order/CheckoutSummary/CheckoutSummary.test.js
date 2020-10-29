import React from "react";
import { shallow } from "enzyme";
import CheckoutSummary from "./CheckoutSummary";
import { inventory, listItems, pricesList } from "../../../shared/testData";

const purchaseCancelled = jest.fn();
const purchaseContinued = jest.fn();

const props = {
  inventory,
  listItems,
  pricesList,
  price: 999,
  purchaseCancelled,
  purchaseContinued,
};

describe("Shallow Render CheckoutSummary component", () => {
  it("renders Heading", () => {
    const wrapper = shallow(<CheckoutSummary {...props} />);
    expect(wrapper.find("h4").text()).toContain(
      "Potvdit kompletní obsah objednávky"
    );
  });

  it("renders Danger button", () => {
    const wrapper = shallow(<CheckoutSummary {...props} />);
    expect(wrapper.find({ btnType: "Danger" }).text()).toContain("<button />");
  });

  it("renders Success button", () => {
    const wrapper = shallow(<CheckoutSummary {...props} />);
    expect(wrapper.find({ btnType: "Success" }).text()).toContain("<button />");
  });

  it("renders 2 buttons", () => {
    const wrapper = shallow(<CheckoutSummary {...props} />);
    expect(wrapper.find("button")).toHaveLength(2);
  });

  it("Match Snapshot of CheckoutSummary component", () => {
    const wrapper = shallow(<CheckoutSummary {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
