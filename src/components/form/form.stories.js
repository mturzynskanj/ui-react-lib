/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import {
  Checkbox,
  RadioInput,
  TextInput,
  SelectInput,
} from "../../../dist/esm/index.js";

export default { title: "Form/inputs" };

export const TextInputStory = () => (
  <>
    <TextInput name="firstname" value="" label="First Name" required />
    <TextInput name="lastname" value="" label="Last Name" required />
  </>
);

export const CheckboxInputStory = () => (
  <div>
    <Checkbox
      id="color-blue"
      className="js_triggerCheckbox"
      aria-label="cheked"
      name="colors"
      value="blue"
      label="yes, blue please"
    />
    <Checkbox
      id="color-red"
      className="js_triggerCheckbox"
      aria-label="cheked"
      name="colors"
      value="red"
      label="yes, red as well"
    />
  </div>
);

export const RadioInputStory = () => (
  <div>
    <RadioInput
      className="js_triggerRadio"
      aria-label="radio"
      name="yesLikeCode"
      id="yes"
      value="yes"
      selected={true}
    />
    <RadioInput
      className="js_triggerRadio"
      aria-label="radio"
      name="yesLikeCode"
      id="no"
      value="no"
    />
  </div>
);

export const SelectInputStory = () => (
  <div>
    <SelectInput
      className="js_triggerRadio"
      aria-label="Select"
      name="select"
      id="yes"
      value="React virtual DOM"
      selected={true}
    >
      <option>hello</option>
      <option>more</option>
      <option>less</option>
    </SelectInput>
  </div>
);
