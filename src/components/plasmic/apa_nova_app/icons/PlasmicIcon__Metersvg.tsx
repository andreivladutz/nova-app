// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MetersvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MetersvgIcon(props: MetersvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
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
          "M26 16a9.928 9.928 0 00-1.14-4.618l-1.495 1.496A7.948 7.948 0 0124 16zm-2.586-6L22 8.586 17.285 13.3A2.966 2.966 0 0016 13a3 3 0 103 3 2.966 2.966 0 00-.3-1.285zM16 17a1 1 0 111-1 1.001 1.001 0 01-1 1zm0-9a7.952 7.952 0 013.122.635l1.496-1.496A9.986 9.986 0 006 16h2a8.01 8.01 0 018-8z"
        }
      ></path>

      <path
        d={
          "M16 30a14 14 0 1114-14 14.016 14.016 0 01-14 14zm0-26a12 12 0 1012 12A12.014 12.014 0 0016 4z"
        }
      ></path>

      <path
        data-name={"<Transparent Rectangle>"}
        fill={"none"}
        d={"M0 0h32v32H0z"}
      ></path>
    </svg>
  );
}

export default MetersvgIcon;
/* prettier-ignore-end */
