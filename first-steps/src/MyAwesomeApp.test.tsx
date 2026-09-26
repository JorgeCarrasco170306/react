import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";

import { render } from "@testing-library/react";

describe("MyAwesomeApp", () => {
  test(" should render firstName and lastname ", () => {
    const { container } = render(<MyAwesomeApp />);

    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");

    expect(h1?.innerHTML).toContain("Jorge");
    expect(h3?.innerHTML).toContain("Carrasco");
  });
});
