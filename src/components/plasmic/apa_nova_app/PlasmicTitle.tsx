// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: greMf1VEQkt4MFPhQZJ1ua
// Component: HmqbxqWFFW
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_apa_nova_app.module.css"; // plasmic-import: greMf1VEQkt4MFPhQZJ1ua/projectcss
import sty from "./PlasmicTitle.module.css"; // plasmic-import: HmqbxqWFFW/css

import DropletsvgIcon from "./icons/PlasmicIcon__Dropletsvg"; // plasmic-import: WQp4tVEOm/icon

export type PlasmicTitle__VariantMembers = {
  hasIcon: "hasIcon";
};

export type PlasmicTitle__VariantsArgs = {
  hasIcon?: SingleBooleanChoiceArg<"hasIcon">;
};

type VariantPropType = keyof PlasmicTitle__VariantsArgs;
export const PlasmicTitle__VariantProps = new Array<VariantPropType>("hasIcon");

export type PlasmicTitle__ArgsType = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTitle__ArgsType;
export const PlasmicTitle__ArgProps = new Array<ArgPropType>(
  "children",
  "icon"
);

export type PlasmicTitle__OverridesType = {
  root?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
};

export interface DefaultTitleProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  hasIcon?: SingleBooleanChoiceArg<"hasIcon">;
  className?: string;
}

function PlasmicTitle__RenderFunc(props: {
  variants: PlasmicTitle__VariantsArgs;
  args: PlasmicTitle__ArgsType;
  overrides: PlasmicTitle__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {(hasVariant(variants, "hasIcon", "hasIcon") ? true : false)
        ? p.renderPlasmicSlot({
            defaultContents: (
              <DropletsvgIcon
                className={classNames(projectcss.all, sty.svg___64VTc)}
                role={"img"}
              />
            ),

            value: args.icon
          })
        : null}

      <h1
        data-plasmic-name={"h1"}
        data-plasmic-override={overrides.h1}
        className={classNames(projectcss.all, projectcss.h1, sty.h1)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "11 Iunie 71",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenhasIcon]: hasVariant(
              variants,
              "hasIcon",
              "hasIcon"
            )
          })
        })}
      </h1>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1"],
  h1: ["h1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTitle__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTitle__VariantsArgs;
    args?: PlasmicTitle__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTitle__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTitle__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTitle__ArgProps,
          internalVariantPropNames: PlasmicTitle__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTitle__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTitle";
  } else {
    func.displayName = `PlasmicTitle.${nodeName}`;
  }
  return func;
}

export const PlasmicTitle = Object.assign(
  // Top-level PlasmicTitle renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),

    // Metadata about props expected for PlasmicTitle
    internalVariantProps: PlasmicTitle__VariantProps,
    internalArgProps: PlasmicTitle__ArgProps
  }
);

export default PlasmicTitle;
/* prettier-ignore-end */
