import React from "react";
import { shallow } from "enzyme";
import StoreBoard from "./StoreBoard";

const props = {
  inventory: {
    shopItem1: 1,
    shopItem2: 2,
    shopItem3: 3,
    shopItem4: 4,
    shopItem5: 5,
    shopItem6: 6,
    shopItem7: 7,
    shopItem8: 8,
  },
  listNames: {
    shopItem1: "Solaris",
    shopItem2: "Dornfelder",
    shopItem3: "Agni",
    shopItem4: "Muscaris",
    shopItem5: "Sauvignon",
    shopItem6: "Tramín",
    shopItem7: "Hibernal",
    shopItem8: "Pálava",
  },
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
