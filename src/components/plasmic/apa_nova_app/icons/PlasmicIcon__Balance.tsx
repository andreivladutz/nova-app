// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BalanceIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BalanceIcon(props: BalanceIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M348.105 144.54L380.878 0H131.122l32.773 144.539C83.188 180.004 26.821 260.632 26.821 354.44c0 61.039 23.88 116.486 62.786 157.56h332.781c38.907-41.074 62.79-96.521 62.79-157.56.001-93.807-56.368-174.435-137.073-209.9zM333.97 37.463l-20.953 92.41H198.986l-20.953-92.41H333.97zm71.448 437.074h-298.84c-27.377-33.98-42.293-76.067-42.293-120.097 0-76.062 45.016-144.99 114.682-175.604l26.172-11.5h101.723l26.171 11.501c69.667 30.615 114.683 99.543 114.683 175.602-.001 44.029-14.919 86.118-42.298 120.098z"
        }
      ></path>
    </svg>
  );
}

export default BalanceIcon;
/* prettier-ignore-end */
