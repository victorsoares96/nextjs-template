import React from "react";
import getIntl from "@utils/getIntl";
import { render } from "@testing-library/react";
import IntlGlobalProvider, { setIntl, translate } from "../index";
import { IntlShape } from "react-intl";
import * as reactIntl from "react-intl";

jest.mock("react-intl");

describe("Test for IntlGlobalProvider", () => {
  it("should return children", async () => {
    const mockUseIntl = jest.spyOn(reactIntl, "useIntl");

    const { getByTestId } = render(
      <IntlGlobalProvider>
        <div data-testid="children">TEST</div>
      </IntlGlobalProvider>
    );
    expect(mockUseIntl).toBeCalled();
    expect(getByTestId("children")).toBeInTheDocument();
  });
});

describe("Test for setIntl method", () => {
  let intl: IntlShape;
  beforeAll(() => {
    jest.spyOn(reactIntl, "createIntl").mockImplementation(() => {
      return { formatMessage: jest.fn() } as unknown as IntlShape;
    });
    intl = getIntl();
    setIntl(intl);
  });

  it("should set the value of intl and translate should call formatMessage", async () => {
    const intlTranslateSpy = jest.spyOn(intl, "formatMessage");
    const values = { id: 10 };
    const id = "something";

    // test translate with values being passed
    translate(id, values);
    expect(intlTranslateSpy).toBeCalledWith({ id }, values);
  });
});

describe("Test for translate method", () => {
  let intl: IntlShape;
  beforeAll(() => {
    jest.spyOn(reactIntl, "createIntl").mockImplementation(() => {
      return { formatMessage: jest.fn() } as unknown as IntlShape;
    });
    intl = getIntl();
    setIntl(intl);
  });

  it("should set the value of intl and translate should call formatMessage", async () => {
    const intlTranslateSpy = jest.spyOn(intl, "formatMessage");
    const values = { id: 10 };
    const id = "something";

    // test translate with values being passed
    translate(id, values);
    expect(intlTranslateSpy).toBeCalledWith({ id }, values);

    // test translate without values
    translate(id);
    expect(intlTranslateSpy).toBeCalledWith({ id }, {});
  });
});
