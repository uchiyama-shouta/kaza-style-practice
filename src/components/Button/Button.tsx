import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"button">;

import { createStyle, margeStyle } from "@kaze-style/react";

const classes = createStyle({
  button: {
    height: "40px",
    paddingLeft: "8px",
    paddingRight: "8px",
    marginLeft: "10px",
    borderTopStyle: "solid",
    borderRightStyle: "solid",
    borderBottomStyle: "solid",
    borderLeftStyle: "solid",
    borderTopColor: "#000",
    borderRightColor: "#000",
    borderBottomColor: "#000",
    borderLeftColor: "#000",
    borderTopWidth: "1px",
    borderRightWidth: "1px",
    borderBottomWidth: "1px",
    borderLeftWidth: "1px",
  },
});

const Button: FC<Props> = (props) => {
  const { className, ...buttonProps } = props;

  return (
    <button
      className={margeStyle(classes.button, className)}
      {...buttonProps}
    />
  );
};

export default Button;
