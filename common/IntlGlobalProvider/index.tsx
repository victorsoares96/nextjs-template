import React from "react";
import { IntlShape, useIntl } from "react-intl";

// 'intl' service singleton reference
let intl: IntlShape;

interface Props {
  children: React.ReactNode;
}

const IntlGlobalProvider: React.FC<Props> = ({ children }) => {
  intl = useIntl(); // Keep the 'intl' service reference
  return <>{children}</>;
};

export default IntlGlobalProvider;

// setter function to set intl value inside tests
export const setIntl = (intlValue: IntlShape) => {
  intl = intlValue;
};

export const translate = (id: string, values = {}) => intl.formatMessage({ id }, values);
