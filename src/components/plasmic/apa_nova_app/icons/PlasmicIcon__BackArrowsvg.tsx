// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BackArrowsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BackArrowsvgIcon(props: BackArrowsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 25.451 25.451"}
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
          "M20.982.521v2.006L8.57 12.315c-.121.101-.195.251-.195.41s.074.311.195.41l12.412 9.79v2.005a.52.52 0 01-.297.469.519.519 0 01-.549-.061L4.664 13.136a.531.531 0 010-.82L20.136.113a.523.523 0 01.846.408z"
        }
      ></path>
    </svg>
  );
}

export default BackArrowsvgIcon;
/* prettier-ignore-end */
