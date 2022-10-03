import type { AppProps } from "next/app";

import { createGlobalStyle } from "@kaze-style/react";
import { resetStyle } from "@kaze-style/themes";

createGlobalStyle(resetStyle);

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default App;
