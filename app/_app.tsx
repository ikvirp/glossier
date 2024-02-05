import React from "react";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";

import theme from "@/themeConfig";

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={theme}>
    <Component {...pageProps} />
  </ConfigProvider>
);

export default App;
