// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AbacusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AbacusIcon(props: AbacusIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      xmlSpace={"preserve"}
      viewBox={"0 0 43.354 43.354"}
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
          "M34.771 0H8.583a4 4 0 00-4 4v35.354a4 4 0 004 4h26.188a4 4 0 004-4V4a4 4 0 00-4-4zm-2.845 35.486h-7v.668a2 2 0 01-4 0v-.668h-.5v.668a2 2 0 01-4 0v-.668h-.5v.668a2 2 0 01-4 0v-.668h-.5a1.5 1.5 0 110-3h.5v-.666a2 2 0 014 0v.666h.5v-.666a2 2 0 014 0v.666h.5v-.666a2 2 0 014 0v.666h7a1.5 1.5 0 010 3zm0-12.309h-7v.667a2 2 0 01-4 0v-.667h-.5v.667a2 2 0 01-4 0v-.667h-.5v.667a2 2 0 01-4 0v-.667h-.5a1.5 1.5 0 110-3h.5v-.667a2 2 0 014 0v.667h.5v-.667a2 2 0 014 0v.667h.5v-.667a2 2 0 014 0v.667h7a1.5 1.5 0 110 3zm0-12.309h-.5v.667a2 2 0 01-4 0v-.667h-.5v.667a2 2 0 01-4 0v-.667h-.5v.667a2 2 0 01-4 0v-.667h-7a1.5 1.5 0 110-3h7v-.667a2 2 0 014 0v.667h.5v-.667a2 2 0 014 0v.667h.5v-.667a2 2 0 014 0v.667h.5a1.5 1.5 0 110 3z"
        }
      ></path>
    </svg>
  );
}

export default AbacusIcon;
/* prettier-ignore-end */
