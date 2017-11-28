import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { CardForm } from "../../components/card-form";

describe("CardForm Component", () => {
  let instance;
  beforeEach(() => {
    instance = shallow(<CardForm/>).instance();
  });
  it("renders w/out crashing: Enzyme", () => {
    shallow(<CardForm/>);
  });
  it("renders w/out crashing: Snapshot", () => {
    const component = renderer.create(<CardForm/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should empty card on emptyNewCard()", () => {
    instance.emptyNewCard();
    expect(instance.state.card).toEqual({
      question: "",
      answer: ""
    });
  });
  it("should set state on setError()", () => {
    instance.setError(true);
    expect(instance.state.hasError).toEqual(true);
  });
});
