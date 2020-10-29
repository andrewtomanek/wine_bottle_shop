import React from "react";
import { shallow } from "enzyme";
import Order from "./Order";
import { inventory, listItems } from "../../shared/testData";

const purchaseCancelled = jest.fn();
const purchaseContinued = jest.fn();

const props = {
  inventory,
  listItems,
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
