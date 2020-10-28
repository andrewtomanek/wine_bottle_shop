import React from "react";
import { shallow } from "enzyme";
import Order from "./Order";

const purchaseCancelled = jest.fn();
const purchaseContinued = jest.fn();

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
  listItems: {
    shopItem1: "Solaris",
    shopItem2: "Dornfelder",
    shopItem3: "Agni",
    shopItem4: "Muscaris",
    shopItem5: "Sauvignon",
    shopItem6: "Tramín",
    shopItem7: "Hibernal",
    shopItem8: "Pálava",
  },
  price: 999,
  purchaseCancelled,
  purchaseContinued,
};

describe("Shallow Render Order component", () => {
  it("renders Sum", () => {
    const wrapper = shallow(<Order {...props} />);
    expect(wrapper.find("p").find(".OrderPrice").text()).toContain(
      "Cena 999.00"
    );
  });
  it("renders order items", () => {
    const wrapper = shallow(<Order {...props} />);
    expect(wrapper.find(".OrderInventory").children()).toHaveLength(8);
  });

  it("Match Snapshot of Order component", () => {
    const wrapper = shallow(<Order {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
