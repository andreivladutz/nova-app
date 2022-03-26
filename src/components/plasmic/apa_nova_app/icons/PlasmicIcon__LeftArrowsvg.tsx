// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LeftArrowsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LeftArrowsvgIcon(props: LeftArrowsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 490 490"}
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
          "M380.589 366.291L256.804 244.998l123.785-121.289 36.982 37.869-85.136 83.42 85.136 83.424z"
        }
      ></path>

      <path
        d={
          "M322.466 490L72.429 244.996 322.466 0l74.702 76.493L225.2 244.996l171.968 168.511z"
        }
      ></path>
    </svg>
  );
}

export default LeftArrowsvgIcon;
/* prettier-ignore-end */
