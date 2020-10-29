import React from "react";
import { shallow } from "enzyme";
import CheckoutList from "./CheckoutList";
import { inventory, listItems, pricesList } from "../../../shared/testData";

const props = {
  inventory,
  listItems,
  pricesList,
};

const emptyProps = { inventory: {} };

describe("Shallow Render CheckoutList component", () => {
  it("renders Complete", () => {
    const wrapper = shallow(<CheckoutList {...props} />);
    expect(wrapper.find(".PriceSum").text()).toContain(" Komplet ");
  });

  it("renders empty cart", () => {
    const wrapper = shallow(<CheckoutList {...emptyProps} />);
    expect(wrapper.find(".Empty").text()).toContain("Žádné položky");
  });

  it("renders shop items", () => {
    const wrapper = shallow(<CheckoutList {...props} />);
    expect(wrapper.find(".CheckoutList").children()).toHaveLength(36);
  });

  it("Match Snapshot of CheckoutList component", () => {
    const wrapper = shallow(<CheckoutList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
