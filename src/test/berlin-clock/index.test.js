import React from "react";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";
import BerlinClock from "../../component/berlin-clock";
import Seconds from "../../component/berlin-clock/seconds";

describe("Berlin Clock component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BerlinClock time={"00"} />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Seconds component", () => {
    expect(wrapper.find("Seconds").length).toEqual(1);
  });

  it("Should throw error message if there is no time prop", () => {
    const errorMsg =
      "Failed prop type: The prop `time` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      BerlinClock.propTypes,
      { time: undefined },
      "prop",
      BerlinClock.time
    );

    expect(result).toEqual(errorMsg);
  });

  it("Should throw error message if time prop type is not a string", () => {
    const errorMsg =
      "Failed prop type: Invalid prop `time` of type `number` supplied to `<<anonymous>>`, expected `string`.";

    const result = checkPropTypes(
      BerlinClock.propTypes,
      { time: 12 },
      "prop",
      BerlinClock.time
    );

    expect(result).toEqual(errorMsg);
  });
});

describe("Seconds Lamp functionality", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BerlinClock time={"00"} />);
  });

  it("should pass Y for even second value", () => {
    const secondsWrapper = wrapper.find(Seconds);
    expect(secondsWrapper.props().seconds).toEqual("Y");
  });
});
