import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Deck } from "../../components/deck";

describe("Deck Component", () => {
  const cards = [
    {
      question: "Test question 1",
      answer: "Test answer 1"
    },
    {
      question: "Test question 2",
      answer: "Test answer 2"
    },
    {
      question: "Test question 3",
      answer: "Test answer 3"
    }
  ];
  let instance;
  beforeEach(() => {
    instance = shallow(<Deck cards={cards}/>).instance();
  });
  it("renders w/out crashing: Enzyme", () => {
    shallow(<Deck cards={cards}/>);
  });
  it("renders w/out crashing: Snapshot", () => {
    const component = renderer.create(<Deck cards={cards}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should toggle side on switchSides()", () => {
    instance.switchSides();
    expect(instance.state.toggleSide).toEqual(false);
  });
  it("should increment counts on nextCard()", () => {
    instance.nextCard();
    expect(instance.state.counts).toEqual({
      total: 3,
      current: 1,
      next: 2,
      prev: 1
    });
  });
  it("should decrement counts on prevCard()", () => {
    instance.nextCard();
    instance.nextCard();
    instance.prevCard();
    expect(instance.state.counts).toEqual({
      total: 3,
      current: 1,
      next: 2,
      prev: 0
    });
  });
});
