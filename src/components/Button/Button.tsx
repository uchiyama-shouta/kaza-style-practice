import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"button">;

import { createStyle, mergeStyle } from "@kaze-style/react";

import { theme } from "lib/theme";

const classes = createStyle({
  button: {
    height: "40px",
    padding: "0px 8px",
    marginLeft: "10px",
    border: "solid",
    borderColor: "#000",
    borderWidth: "1px",
    [theme.screen.xs]: {
      color: theme.colors.green,
    },
  },
});

const Button: FC<Props> = (props) => {
  const { className, ...buttonProps } = props;

  return (
    <button
      className={mergeStyle(classes.button, className)}
      {...buttonProps}
    />
  );
};

export default Button;
