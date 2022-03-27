// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: greMf1VEQkt4MFPhQZJ1ua
// Component: ODN3YJ6SGk
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
import sty from "./PlasmicIconRow.module.css"; // plasmic-import: ODN3YJ6SGk/css

import DatesvgIcon from "./icons/PlasmicIcon__Datesvg"; // plasmic-import: ecCv7ecZt/icon

export type PlasmicIconRow__VariantMembers = {
  noStaticText: "noStaticText";
  visualVariations:
    | "large"
    | "newlineDynamicText"
    | "defaultColor"
    | "primaryDynamicText";
};

export type PlasmicIconRow__VariantsArgs = {
  noStaticText?: SingleBooleanChoiceArg<"noStaticText">;
  visualVariations?: MultiChoiceArg<
    "large" | "newlineDynamicText" | "defaultColor" | "primaryDynamicText"
  >;
};

type VariantPropType = keyof PlasmicIconRow__VariantsArgs;
export const PlasmicIconRow__VariantProps = new Array<VariantPropType>(
  "noStaticText",
  "visualVariations"
);

export type PlasmicIconRow__ArgsType = {
  iconEntry?: React.ReactNode;
  children?: React.ReactNode;
  staticText?: React.ReactNode;
};

type ArgPropType = keyof PlasmicIconRow__ArgsType;
export const PlasmicIconRow__ArgProps = new Array<ArgPropType>(
  "iconEntry",
  "children",
  "staticText"
);

export type PlasmicIconRow__OverridesType = {
  root?: p.Flex<"div">;
  iconContainer?: p.Flex<"div">;
};

export interface DefaultIconRowProps {
  iconEntry?: React.ReactNode;
  children?: React.ReactNode;
  staticText?: React.ReactNode;
  noStaticText?: SingleBooleanChoiceArg<"noStaticText">;
  visualVariations?: MultiChoiceArg<
    "large" | "newlineDynamicText" | "defaultColor" | "primaryDynamicText"
  >;
  className?: string;
}

function PlasmicIconRow__RenderFunc(props: {
  variants: PlasmicIconRow__VariantsArgs;
  args: PlasmicIconRow__ArgsType;
  overrides: PlasmicIconRow__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

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
        sty.root,
        {
          [sty.rootnoStaticText]: hasVariant(
            variants,
            "noStaticText",
            "noStaticText"
          ),
          [sty.rootvisualVariations_large]: hasVariant(
            variants,
            "visualVariations",
            "large"
          )
        }
      )}
    >
      {(hasVariant(variants, "noStaticText", "noStaticText") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__tlnjQ, {
            [sty.freeBoxnoStaticText__tlnjQZzqXv]: hasVariant(
              variants,
              "noStaticText",
              "noStaticText"
            ),
            [sty.freeBoxvisualVariations_large__tlnjQhfblI]: hasVariant(
              variants,
              "visualVariations",
              "large"
            ),
            [sty.freeBoxvisualVariations_newlineDynamicText__tlnjQRkRc]:
              hasVariant(variants, "visualVariations", "newlineDynamicText")
          })}
        >
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__uLk2G)}>
              {(
                hasVariant(variants, "visualVariations", "large") ? true : true
              ) ? (
                <div
                  data-plasmic-name={"iconContainer"}
                  data-plasmic-override={overrides.iconContainer}
                  className={classNames(projectcss.all, sty.iconContainer, {
                    [sty.iconContainervisualVariations_large]: hasVariant(
                      variants,
                      "visualVariations",
                      "large"
                    )
                  })}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox___2Teu3, {
                      [sty.freeBoxvisualVariations_large___2Teu3HfblI]:
                        hasVariant(variants, "visualVariations", "large")
                    })}
                  >
                    {p.renderPlasmicSlot({
                      defaultContents: (
                        <DatesvgIcon
                          className={classNames(projectcss.all, sty.svg__boGe5)}
                          role={"img"}
                        />
                      ),

                      value: args.iconEntry
                    })}
                  </div>
                </div>
              ) : null}
              {(
                hasVariant(variants, "noStaticText", "noStaticText")
                  ? false
                  : true
              )
                ? p.renderPlasmicSlot({
                    defaultContents: "Static text",
                    value: args.staticText,
                    className: classNames(sty.slotTargetStaticText, {
                      [sty.slotTargetStaticTextnoStaticText]: hasVariant(
                        variants,
                        "noStaticText",
                        "noStaticText"
                      ),
                      [sty.slotTargetStaticTextvisualVariations_defaultColor]:
                        hasVariant(
                          variants,
                          "visualVariations",
                          "defaultColor"
                        ),
                      [sty.slotTargetStaticTextvisualVariations_large]:
                        hasVariant(variants, "visualVariations", "large")
                    })
                  })
                : null}
            </div>
          ) : null}
          {(hasVariant(variants, "noStaticText", "noStaticText") ? true : true)
            ? p.renderPlasmicSlot({
                defaultContents: "14.03.2022",
                value: args.children,
                className: classNames(sty.slotTargetChildren, {
                  [sty.slotTargetChildrennoStaticText]: hasVariant(
                    variants,
                    "noStaticText",
                    "noStaticText"
                  ),
                  [sty.slotTargetChildrenvisualVariations_defaultColor]:
                    hasVariant(variants, "visualVariations", "defaultColor"),
                  [sty.slotTargetChildrenvisualVariations_large]: hasVariant(
                    variants,
                    "visualVariations",
                    "large"
                  ),
                  [sty.slotTargetChildrenvisualVariations_newlineDynamicText]:
                    hasVariant(
                      variants,
                      "visualVariations",
                      "newlineDynamicText"
                    ),
                  [sty.slotTargetChildrenvisualVariations_primaryDynamicText]:
                    hasVariant(
                      variants,
                      "visualVariations",
                      "primaryDynamicText"
                    )
                })
              })
            : null}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "iconContainer"],
  iconContainer: ["iconContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  iconContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIconRow__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIconRow__VariantsArgs;
    args?: PlasmicIconRow__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIconRow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicIconRow__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicIconRow__ArgProps,
      internalVariantPropNames: PlasmicIconRow__VariantProps
    });

    return PlasmicIconRow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIconRow";
  } else {
    func.displayName = `PlasmicIconRow.${nodeName}`;
  }
  return func;
}

export const PlasmicIconRow = Object.assign(
  // Top-level PlasmicIconRow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    iconContainer: makeNodeComponent("iconContainer"),

    // Metadata about props expected for PlasmicIconRow
    internalVariantProps: PlasmicIconRow__VariantProps,
    internalArgProps: PlasmicIconRow__ArgProps
  }
);

export default PlasmicIconRow;
/* prettier-ignore-end */