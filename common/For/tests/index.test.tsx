/**
 *
 * Tests for For
 *
 */

import React from "react";
import { render } from "@utils/testUtils";
import For from "../index";

describe("<For />", () => {
  const Component = render(
    <For
      of={[{ name: "Something" }]}
      noParent={false}
      ParentComponent={() => <div data-testid="for" />}
      renderItem={(item, idx: number) => <div key={idx}>{item.name}</div>}
    />
  );

  it("should render and match the snapshot", () => {
    const { baseElement } = Component;
    expect(baseElement).toMatchSnapshot();
  });

  it("should contain 1 For component", () => {
    const { getAllByTestId } = Component;
    expect(getAllByTestId("for").length).toBe(1);
  });
});
