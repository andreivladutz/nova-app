// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DatesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DatesvgIcon(props: DatesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      preserveAspectRatio={"xMidYMid meet"}
      viewBox={"0 0 36 36"}
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
        className={"clr-i-outline clr-i-outline-path-1"}
        d={
          "M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 002 7.81v22.38A1.78 1.78 0 003.75 32h28.5A1.78 1.78 0 0034 30.19V7.81A1.78 1.78 0 0032.25 6z"
        }
      ></path>

      <path
        className={"clr-i-outline clr-i-outline-path-2"}
        d={"M8 14h2v2H8z"}
      ></path>

      <path
        className={"clr-i-outline clr-i-outline-path-3"}
        d={"M14 14h2v2h-2z"}
      ></path>

      <path
        className={"clr-i-outline clr-i-outline-path-4"}
        d={"M20 14h2v2h-2z"}
      ></path>

      <path
        className={"clr-i-outline clr-i-outline-path-5"}
        d={"M26 14h2v2h-2z"}
      ></path>

      <path
        className={"clr-i-outline clr-i-outline-path-6"}
        d={"M8 19h2v2H8z"}
      ></path>

      <path
        className={"clr-i-outline clr-i-outline-path-7"}
        d={"M14 19h2v2h-2z"}
      ></path>

      <path
        className={"clr-i-outline clr-i-outline-path-8"}
        d={"M20 19h2v2h-2z"}
      ></path>

      <path
        className={"clr-i-outline clr-i-outline-path-9"}
        d={"M26 19h2v2h-2z"}
      ></path>

      <path
        className={"clr-i-outline clr-i-outline-path-10"}
        d={"M8 24h2v2H8z"}
      ></path>

      <path
        className={"clr-i-outline clr-i-outline-path-11"}
        d={"M14 24h2v2h-2z"}
      ></path>

      <path
        className={"clr-i-outline clr-i-outline-path-12"}
        d={"M20 24h2v2h-2z"}
      ></path>

      <path
        className={"clr-i-outline clr-i-outline-path-13"}
        d={"M26 24h2v2h-2z"}
      ></path>

      <path
        className={"clr-i-outline clr-i-outline-path-14"}
        d={"M10 10a1 1 0 001-1V3a1 1 0 00-2 0v6a1 1 0 001 1z"}
      ></path>

      <path
        className={"clr-i-outline clr-i-outline-path-15"}
        d={"M26 10a1 1 0 001-1V3a1 1 0 00-2 0v6a1 1 0 001 1z"}
      ></path>

      <path
        className={"clr-i-outline clr-i-outline-path-16"}
        d={"M13 6h10v2H13z"}
      ></path>

      <path fill={"none"} d={"M0 0h36v36H0z"}></path>
    </svg>
  );
}

export default DatesvgIcon;
/* prettier-ignore-end */
