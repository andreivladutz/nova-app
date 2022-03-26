// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WarningsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WarningsvgIcon(props: WarningsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 491.537 491.537"}
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
          "M488.117 459.466l-223.1-447.2c-10.4-17.4-32-13.1-37.5 0l-225.2 449.3c-8 15.6 6.3 29.2 18.8 29.2h450.4c16 0 25.5-18.3 16.6-31.3zm-433.7-9.4l191.8-383.6 190.8 383.7h-382.6v-.1z"
        }
      ></path>

      <path
        d={
          "M225.417 206.166v104.3c0 11.5 9.4 20.9 20.9 20.9 11.5 0 19.8-8.3 20.9-19.8v-105.4c0-11.5-9.4-20.9-20.9-20.9-11.5 0-20.9 9.4-20.9 20.9z"
        }
      ></path>

      <circle cx={"246.217"} cy={"388.066"} r={"20.5"}></circle>
    </svg>
  );
}

export default WarningsvgIcon;
/* prettier-ignore-end */
