// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DropletsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DropletsvgIcon(props: DropletsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      aria-hidden={"true"}
      role={"img"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "iconify iconify--twemoji"
      )}
      preserveAspectRatio={"xMidYMid meet"}
      viewBox={"0 0 36 36"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M28.344 17.768L18.148 1.09 8.7 17.654c-2.2 3.51-2.392 8.074-.081 11.854 3.285 5.373 10.363 7.098 15.811 3.857 5.446-3.24 7.199-10.22 3.914-15.597z"
        }
      ></path>
    </svg>
  );
}

export default DropletsvgIcon;
/* prettier-ignore-end */
