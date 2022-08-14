import React, { ButtonHTMLAttributes, forwardRef, memo } from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

const useStyles = createUseStyles({
  button: {
    border: "none",
    cursor: "pointer",
  },
});

interface StylesOptions {}

const Button = memo(
  forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ className, ...rest }, ref) => {
      const stylesOptions: StylesOptions = {};
      const classes = useStyles(stylesOptions);
      return (
        <button
          className={classNames(className, classes.button)}
          {...rest}
          ref={ref}
        />
      );
    }
  )
);

export default Button;
