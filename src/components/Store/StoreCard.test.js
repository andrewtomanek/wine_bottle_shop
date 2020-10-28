import React from "react";
import { shallow } from "enzyme";
import StoreCard from "./StoreCard";

const props = {
  itemType: "shopItem1",
  itemName: "TestName",
};

describe("Shallow Render StoreCard component", () => {
  it("renders item name", () => {
    const wrapper = shallow(<StoreCard {...props} />);
    expect(wrapper.find("p").text()).toContain("TestName");
  });

  it("Adds correct shop item class", () => {
    const wrapper = shallow(<StoreCard {...props} />);
    expect(wrapper.find({ className: "shopItem1 ShopItem" })).toHaveLength(1);
  });

  it("Match Snapshot of StoreCard component", () => {
    const wrapper = shallow(<StoreCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
