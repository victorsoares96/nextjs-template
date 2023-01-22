import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "@common";
import Head from "next/head";
import { IntlProvider } from "react-intl";
import { Provider as ReduxProvider } from "react-redux";
import messages from "../translations/en.json";
import { wrapper } from "@store";
import { StyleProvider } from "@ant-design/cssinjs";

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <StyleProvider hashPriority="high">
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <IntlProvider messages={messages} locale="en" defaultLocale="en">
        <ReduxProvider store={store}>
          <ErrorBoundary>
            <Component {...props.pageProps} />
          </ErrorBoundary>
        </ReduxProvider>
      </IntlProvider>
    </StyleProvider>
  );
};

export default MyApp;
