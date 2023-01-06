import pickBy from "lodash-es/pickBy";
import camelCase from "lodash-es/camelCase";
import { screenBreakPoints } from "@themes/media";

// @ts-ignore
export const mapKeysDeep = (obj: Record<string, unknown>, fn: (value: string) => any) =>
  Array.isArray(obj)
    ? // @ts-ignore
      obj.map(val => mapKeysDeep(val, fn))
    : typeof obj === "object"
    ? Object.keys(obj as object).reduce((acc, current) => {
        const key = fn(current);
        // @ts-ignore
        const val = (obj as object)[current];
        // @ts-ignore
        acc[key] = val !== null && typeof val === "object" ? mapKeysDeep(val, fn) : val;
        return acc;
      }, {})
    : obj;

export const isLocal = () => {
  try {
    const local = JSON.parse(process.env.IS_LOCAL ?? "false");
    return typeof local === "boolean" && local;
  } catch {
    // continue regardless of error
  }
  return false;
};

export function getQueryStringValue(keys: string[]) {
  const queryString: { [key: string]: string } = {};
  try {
    keys.forEach(key => {
      queryString[key] = decodeURIComponent(
        window.location.search.replace(
          new RegExp(
            `^(?:.*[&\\?]${encodeURIComponent(key).replace(/[.+*]/g, "\\$&")}(?:\\=([^&]*))?)?.*$`,
            "i"
          ),
          "$1"
        )
      );
    });
    // eslint-disable-next-line
    return pickBy(queryString);
  } catch (error) {
    return null;
  }
}

export const setDeviceType = (width = document.body.clientWidth) => {
  if (width >= screenBreakPoints.MOBILE && width < screenBreakPoints.TABLET) {
    return "mobile";
  } else if (width >= screenBreakPoints.TABLET && width < screenBreakPoints.DESKTOP) {
    return "tablet";
  } else {
    return "desktop";
  }
};

/**
 * Converts an object's keys to camelCase, takes reference to the object
 * @param obj the object whose keys to convert
 */
export const convertObjectToCamelCase = <T>(obj: Record<string, unknown>): T => {
  // Almost everything is JS is of type Object which means doing typeof obj is unreliable
  // this is a better method to check if the object gives back [object Object] since
  // Array and null return [object Array] and [object Null]
  if (obj.toString() !== "[object Object]") {
    throw new Error("The type of value passed in must be an object's reference");
  }

  for (const key in obj) {
    const camelKey = camelCase(key);
    if (camelKey !== key) {
      obj[camelKey] = obj[key];
      delete obj[key];
    }
  }

  return obj as T;
};

export const getDeviceType = (device: "mobile" | "tablet" | "desktop") =>
  (device || setDeviceType()).toUpperCase();
