import { describe, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";

import { render } from "@testing-library/react";

describe("MyAwesomeApp", () => {
  test(" should render firstName and lastname ", () => {
    const component = render(<MyAwesomeApp />);
    console.log(component);
  });
});
