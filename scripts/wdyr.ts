/// <reference types="@welldone-software/why-did-you-render" />
import React from "react";

/* eslint-disable @typescript-eslint/no-var-requires */

if (process.env.NODE_ENV === "development") {
  if (typeof window !== "undefined") {
    const whyDidYouRender = require("@welldone-software/why-did-you-render");
    // const ReactRedux = require('react-redux');
    whyDidYouRender(React, {
      trackAllPureComponents: true,
      // trackExtraHooks: [[ReactRedux, "useSelector"]]
    });
  }
}
