import { css, FlattenSimpleInterpolation } from "styled-components";
import fonts, { dynamicFontSize } from "../fonts";
import media from "../media";

const normalize = (value: FlattenSimpleInterpolation) =>
  value
    .join("")
    .replace(/^\s+|\s+$|\s+(?=\s)/g, "")
    .trim();

describe("fonts", () => {
  it("should have the correct font-size", () => {
    expect(normalize(fonts.size.small())).toEqual("font-size: 0.875rem;");
    expect(normalize(fonts.size.regular())).toEqual("font-size: 1rem;");
    expect(normalize(fonts.size.big())).toEqual("font-size: 1.25rem;");
    expect(normalize(fonts.size.large())).toEqual("font-size: 1.5rem;");
    expect(normalize(fonts.size.extraLarge())).toEqual("font-size: 2rem;");
  });
  it("should have the correct font-weight", () => {
    expect(normalize(fonts.weights.light())).toEqual("font-weight: light;");
    expect(normalize(fonts.weights.bold())).toEqual("font-weight: bold;");
    expect(normalize(fonts.weights.normal())).toEqual("font-weight: normal;");
  });
  it("should have the correct font-weight and font-size", () => {
    expect(normalize(fonts.style.heading())).toEqual("font-size: 1.5rem; font-weight: bold;");
    expect(normalize(fonts.style.subheading())).toEqual("font-size: 1.25rem; font-weight: bold;");
    expect(normalize(fonts.style.standard())).toEqual("font-size: 1rem; font-weight: normal;");
    expect(normalize(fonts.style.subText())).toEqual("font-size: 0.875rem; font-weight: normal;");
  });
});

describe("Tests for dynamicFontSize method", () => {
  it("should return dynamic font stylings along with required media queries", () => {
    const font = fonts.size.large;
    const desktopDelta = 1;
    const tabletDelta = 0.4;
    const expectedResult = css`
      ${font()}
      ${media.greaterThan("tablet")`font-size: ${
        tabletDelta +
        parseInt(
          (font()[0] as string).replace("font-size:", "").replace("rem;", "").replace(/\s+/g, "")
        )
      }rem;`}
    ${media.greaterThan("desktop")`font-size: ${
        desktopDelta +
        parseInt(
          (font()[0] as string).replace("font-size:", "").replace("rem;", "").replace(/\s+/g, "")
        )
      }rem;`}
    `;
    expect(normalize(dynamicFontSize(font, desktopDelta, tabletDelta))).toEqual(
      normalize(expectedResult)
    );
  });

  it("should return  default dynamic font stylings along with required media queries", () => {
    const font = fonts.size.large;

    const expectedResult = css`
      ${font()}
      ${media.greaterThan("tablet")`font-size: ${
        0 +
        parseInt(
          (font()[0] as string).replace("font-size:", "").replace("rem;", "").replace(/\s+/g, "")
        )
      }rem;`}
    ${media.greaterThan("desktop")`font-size: ${
        0 +
        parseInt(
          (font()[0] as string).replace("font-size:", "").replace("rem;", "").replace(/\s+/g, "")
        )
      }rem;`}
    `;
    expect(normalize(dynamicFontSize(font))).toEqual(normalize(expectedResult));
  });
});
