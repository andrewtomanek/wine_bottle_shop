import React from "react";
import { shallow } from "enzyme";
import StoreBoard from "./StoreBoard";
import { inventory, listItems as listNames } from "../../shared/testData";

const props = {
  inventory,
  listNames,
};

const emptyProps = { inventory: {} };

describe("Shallow Render StoreBoard component", () => {
  it("renders empty cart", () => {
    const wrapper = shallow(<StoreBoard {...emptyProps} />);
    expect(wrapper.find(".Store").text()).toContain("Žádné položky");
  });

  it("renders shop items", () => {
    const wrapper = shallow(<StoreBoard {...props} />);
    expect(wrapper.find(".Store").children()).toHaveLength(36);
  });

  it("Match Snapshot of StoreBoard component", () => {
    const wrapper = shallow(<StoreBoard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
