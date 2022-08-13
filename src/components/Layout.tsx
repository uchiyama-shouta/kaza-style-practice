import type { FC, ReactNode } from "react";

import { createStyle } from "@kaze-style/react";

const classes = createStyle({
  layout: {
    paddingTop: "70px",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return <div className={classes.layout}>{children}</div>;
};

export default Layout;
