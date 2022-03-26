// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: greMf1VEQkt4MFPhQZJ1ua
// Component: WfeXSi13l0
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
import Button from "../../Button"; // plasmic-import: JGQhBxRoWTE/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_apa_nova_app.module.css"; // plasmic-import: greMf1VEQkt4MFPhQZJ1ua/projectcss
import sty from "./PlasmicCardWall.module.css"; // plasmic-import: WfeXSi13l0/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: Bt309EfSp_c/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: EHycK_nnkfH/icon

export type PlasmicCardWall__VariantMembers = {
  cardType: "_default" | "ctaOnly" | "noCta" | "contentOnly";
  bgHidden: "bgHidden";
  contentCentered: "contentCentered";
  shrinkedContents: "shrinkedContents";
  decorations: "secondaryCard";
};

export type PlasmicCardWall__VariantsArgs = {
  cardType?: SingleChoiceArg<"_default" | "ctaOnly" | "noCta" | "contentOnly">;
  bgHidden?: SingleBooleanChoiceArg<"bgHidden">;
  contentCentered?: SingleBooleanChoiceArg<"contentCentered">;
  shrinkedContents?: SingleBooleanChoiceArg<"shrinkedContents">;
  decorations?: MultiChoiceArg<"secondaryCard">;
};

type VariantPropType = keyof PlasmicCardWall__VariantsArgs;
export const PlasmicCardWall__VariantProps = new Array<VariantPropType>(
  "cardType",
  "bgHidden",
  "contentCentered",
  "shrinkedContents",
  "decorations"
);

export type PlasmicCardWall__ArgsType = {
  cardTitle?: React.ReactNode;
  cardContent?: React.ReactNode;
  cardCta?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCardWall__ArgsType;
export const PlasmicCardWall__ArgProps = new Array<ArgPropType>(
  "cardTitle",
  "cardContent",
  "cardCta"
);

export type PlasmicCardWall__OverridesType = {
  root?: p.Flex<"div">;
  cardTitle?: p.Flex<"h3">;
  freeBox?: p.Flex<"div">;
  cardContentWrapper?: p.Flex<"div">;
  ctaWrapper?: p.Flex<"div">;
};

export interface DefaultCardWallProps {
  cardTitle?: React.ReactNode;
  cardContent?: React.ReactNode;
  cardCta?: React.ReactNode;
  cardType?: SingleChoiceArg<"_default" | "ctaOnly" | "noCta" | "contentOnly">;
  bgHidden?: SingleBooleanChoiceArg<"bgHidden">;
  contentCentered?: SingleBooleanChoiceArg<"contentCentered">;
  shrinkedContents?: SingleBooleanChoiceArg<"shrinkedContents">;
  decorations?: MultiChoiceArg<"secondaryCard">;
  className?: string;
}

function PlasmicCardWall__RenderFunc(props: {
  variants: PlasmicCardWall__VariantsArgs;
  args: PlasmicCardWall__ArgsType;
  overrides: PlasmicCardWall__OverridesType;

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
          [sty.rootbgHidden]: hasVariant(variants, "bgHidden", "bgHidden"),
          [sty.rootdecorations_secondaryCard]: hasVariant(
            variants,
            "decorations",
            "secondaryCard"
          ),
          [sty.rootshrinkedContents]: hasVariant(
            variants,
            "shrinkedContents",
            "shrinkedContents"
          )
        }
      )}
    >
      {(
        hasVariant(variants, "cardType", "contentOnly")
          ? true
          : hasVariant(variants, "cardType", "ctaOnly")
          ? true
          : true
      ) ? (
        <h3
          data-plasmic-name={"cardTitle"}
          data-plasmic-override={overrides.cardTitle}
          className={classNames(projectcss.all, projectcss.h3, sty.cardTitle, {
            [sty.cardTitlecardType_contentOnly]: hasVariant(
              variants,
              "cardType",
              "contentOnly"
            ),
            [sty.cardTitlecardType_ctaOnly]: hasVariant(
              variants,
              "cardType",
              "ctaOnly"
            )
          })}
        >
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Card title here",
              value: args.cardTitle,
              className: classNames(sty.slotTargetCardTitle, {
                [sty.slotTargetCardTitlebgHidden]: hasVariant(
                  variants,
                  "bgHidden",
                  "bgHidden"
                )
              })
            })}
          </div>
        </h3>
      ) : null}
      {(hasVariant(variants, "cardType", "ctaOnly") ? true : true) ? (
        <div
          data-plasmic-name={"cardContentWrapper"}
          data-plasmic-override={overrides.cardContentWrapper}
          className={classNames(projectcss.all, sty.cardContentWrapper, {
            [sty.cardContentWrappercardType_ctaOnly]: hasVariant(
              variants,
              "cardType",
              "ctaOnly"
            ),
            [sty.cardContentWrappercontentCentered]: hasVariant(
              variants,
              "contentCentered",
              "contentCentered"
            ),
            [sty.cardContentWrappershrinkedContents]: hasVariant(
              variants,
              "shrinkedContents",
              "shrinkedContents"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: null,
            value: args.cardContent,
            className: classNames(sty.slotTargetCardContent, {
              [sty.slotTargetCardContentcardType_ctaOnly]: hasVariant(
                variants,
                "cardType",
                "ctaOnly"
              ),
              [sty.slotTargetCardContentcontentCentered]: hasVariant(
                variants,
                "contentCentered",
                "contentCentered"
              ),
              [sty.slotTargetCardContentshrinkedContents]: hasVariant(
                variants,
                "shrinkedContents",
                "shrinkedContents"
              )
            })
          })}
        </div>
      ) : null}
      {(
        hasVariant(variants, "cardType", "contentOnly")
          ? true
          : hasVariant(variants, "cardType", "noCta")
          ? true
          : true
      ) ? (
        <div
          data-plasmic-name={"ctaWrapper"}
          data-plasmic-override={overrides.ctaWrapper}
          className={classNames(projectcss.all, sty.ctaWrapper, {
            [sty.ctaWrappercardType_contentOnly]: hasVariant(
              variants,
              "cardType",
              "contentOnly"
            ),
            [sty.ctaWrappercardType_ctaOnly]: hasVariant(
              variants,
              "cardType",
              "ctaOnly"
            ),
            [sty.ctaWrappercardType_noCta]: hasVariant(
              variants,
              "cardType",
              "noCta"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <Button
                className={classNames("__wab_instance", sty.button___2Yob2)}
              />
            ),

            value: args.cardCta
          })}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "cardTitle", "freeBox", "cardContentWrapper", "ctaWrapper"],
  cardTitle: ["cardTitle", "freeBox"],
  freeBox: ["freeBox"],
  cardContentWrapper: ["cardContentWrapper"],
  ctaWrapper: ["ctaWrapper"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  cardTitle: "h3";
  freeBox: "div";
  cardContentWrapper: "div";
  ctaWrapper: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCardWall__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCardWall__VariantsArgs;
    args?: PlasmicCardWall__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCardWall__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCardWall__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCardWall__ArgProps,
      internalVariantPropNames: PlasmicCardWall__VariantProps
    });

    return PlasmicCardWall__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardWall";
  } else {
    func.displayName = `PlasmicCardWall.${nodeName}`;
  }
  return func;
}

export const PlasmicCardWall = Object.assign(
  // Top-level PlasmicCardWall renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cardTitle: makeNodeComponent("cardTitle"),
    freeBox: makeNodeComponent("freeBox"),
    cardContentWrapper: makeNodeComponent("cardContentWrapper"),
    ctaWrapper: makeNodeComponent("ctaWrapper"),

    // Metadata about props expected for PlasmicCardWall
    internalVariantProps: PlasmicCardWall__VariantProps,
    internalArgProps: PlasmicCardWall__ArgProps
  }
);

export default PlasmicCardWall;
/* prettier-ignore-end */
