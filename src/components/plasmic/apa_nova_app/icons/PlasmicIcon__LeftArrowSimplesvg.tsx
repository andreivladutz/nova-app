// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LeftArrowSimplesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LeftArrowSimplesvgIcon(props: LeftArrowSimplesvgIconProps) {
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
    </svg>
  );
}

export default LeftArrowSimplesvgIcon;
/* prettier-ignore-end */
