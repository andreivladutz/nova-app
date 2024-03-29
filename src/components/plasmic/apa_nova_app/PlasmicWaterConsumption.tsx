// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: greMf1VEQkt4MFPhQZJ1ua
// Component: Fx826fHAFG
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
import Page from "../../Page"; // plasmic-import: ObT6vFZq55k/component
import Title from "../../Title"; // plasmic-import: HmqbxqWFFW/component
import ConsumptionIndexCard from "../../ConsumptionIndexCard"; // plasmic-import: yRFP5-EEfg/component
import { IndexInput } from "../../../../components/proprietary/IndexInput"; // plasmic-import: ZdBlEIWyCZ/codeComponent
import Button from "../../Button"; // plasmic-import: JGQhBxRoWTE/component
import CardWall from "../../CardWall"; // plasmic-import: WfeXSi13l0/component
import IconRow from "../../IconRow"; // plasmic-import: ODN3YJ6SGk/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_apa_nova_app.module.css"; // plasmic-import: greMf1VEQkt4MFPhQZJ1ua/projectcss
import sty from "./PlasmicWaterConsumption.module.css"; // plasmic-import: Fx826fHAFG/css

import LeftArrowSimplesvgIcon from "./icons/PlasmicIcon__LeftArrowSimplesvg"; // plasmic-import: V3sbMsl70/icon
import DropletsvgIcon from "./icons/PlasmicIcon__Dropletsvg"; // plasmic-import: WQp4tVEOm/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: Bt309EfSp_c/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: EHycK_nnkfH/icon
import CashsvgIcon from "./icons/PlasmicIcon__Cashsvg"; // plasmic-import: y9CJLHvYa/icon
import MetersvgIcon from "./icons/PlasmicIcon__Metersvg"; // plasmic-import: R1BUPGBLI/icon

export type PlasmicWaterConsumption__VariantMembers = {};

export type PlasmicWaterConsumption__VariantsArgs = {};
type VariantPropType = keyof PlasmicWaterConsumption__VariantsArgs;
export const PlasmicWaterConsumption__VariantProps =
  new Array<VariantPropType>();

export type PlasmicWaterConsumption__ArgsType = {
  apartmentNumber?: React.ReactNode;
  totalText?: React.ReactNode;
  waterConsumption?: React.ReactNode;
  priceBreakdown?: React.ReactNode;
  errorMessage?: React.ReactNode;
};

type ArgPropType = keyof PlasmicWaterConsumption__ArgsType;
export const PlasmicWaterConsumption__ArgProps = new Array<ArgPropType>(
  "apartmentNumber",
  "totalText",
  "waterConsumption",
  "priceBreakdown",
  "errorMessage"
);

export type PlasmicWaterConsumption__OverridesType = {
  root?: p.Flex<"div">;
  backButton?: p.Flex<"div">;
  page?: p.Flex<typeof Page>;
  title?: p.Flex<typeof Title>;
  text?: p.Flex<"div">;
  consumptionIndexCard?: p.Flex<typeof ConsumptionIndexCard>;
  enterIdxBtn?: p.Flex<typeof Button>;
  totalBreakdown?: p.Flex<typeof CardWall>;
};

export interface DefaultWaterConsumptionProps {
  apartmentNumber?: React.ReactNode;
  totalText?: React.ReactNode;
  waterConsumption?: React.ReactNode;
  priceBreakdown?: React.ReactNode;
  errorMessage?: React.ReactNode;
  className?: string;
}

function PlasmicWaterConsumption__RenderFunc(props: {
  variants: PlasmicWaterConsumption__VariantsArgs;
  args: PlasmicWaterConsumption__ArgsType;
  overrides: PlasmicWaterConsumption__OverridesType;

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
    <React.Fragment>
      {}

      <div className={projectcss.plasmic_page_wrapper}>
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
          <div
            data-plasmic-name={"backButton"}
            data-plasmic-override={overrides.backButton}
            className={classNames(projectcss.all, sty.backButton)}
          >
            {true ? (
              <LeftArrowSimplesvgIcon
                className={classNames(projectcss.all, sty.svg__eXlSd)}
                role={"img"}
              />
            ) : null}
          </div>

          <Page
            data-plasmic-name={"page"}
            data-plasmic-override={overrides.page}
            className={classNames("__wab_instance", sty.page)}
            cta={
              <React.Fragment>
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__ehZDz)}
                    />
                  ),

                  value: args.errorMessage
                })}

                <Button
                  data-plasmic-name={"enterIdxBtn"}
                  data-plasmic-override={overrides.enterIdxBtn}
                  btnType={"primary" as const}
                  className={classNames("__wab_instance", sty.enterIdxBtn)}
                  endIcon={
                    true ? (
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg___1Sy2O)}
                        role={"img"}
                      />
                    ) : null
                  }
                  shape={"rounded" as const}
                >
                  {"Salvează"}
                </Button>
              </React.Fragment>
            }
            footer={
              <CardWall
                data-plasmic-name={"totalBreakdown"}
                data-plasmic-override={overrides.totalBreakdown}
                cardContent={
                  true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__jStO)}
                    >
                      <IconRow
                        className={classNames(
                          "__wab_instance",
                          sty.iconRow__e4GHe
                        )}
                        iconEntry={
                          <CashsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__kz8Uw
                            )}
                            role={"img"}
                          />
                        }
                        staticText={"Total de plată"}
                        visualVariations={[
                          "large",
                          "primaryDynamicText",
                          "defaultColor"
                        ]}
                      >
                        {true ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__zOp7R
                            )}
                          >
                            {p.renderPlasmicSlot({
                              defaultContents: "50.00 lei",
                              value: args.totalText,
                              className: classNames(sty.slotTargetTotalText)
                            })}
                          </div>
                        ) : null}
                      </IconRow>

                      <IconRow
                        className={classNames(
                          "__wab_instance",
                          sty.iconRow__zeEqW
                        )}
                        iconEntry={
                          <MetersvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__iOsfm
                            )}
                            role={"img"}
                          />
                        }
                        staticText={"Consum total "}
                        visualVariations={["defaultColor"]}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: "3 m³",
                          value: args.waterConsumption
                        })}
                      </IconRow>

                      <IconRow
                        className={classNames(
                          "__wab_instance",
                          sty.iconRow__gtKxf
                        )}
                        iconEntry={
                          <CashsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__mQsQj
                            )}
                            role={"img"}
                          />
                        }
                        staticText={"Componență preț "}
                        visualVariations={[
                          "defaultColor",
                          "newlineDynamicText"
                        ]}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: "7.4 lei / m³= 280 lei / 91 m³",
                          value: args.priceBreakdown
                        })}
                      </IconRow>
                    </div>
                  ) : null
                }
                cardType={"contentOnly" as const}
                className={classNames("__wab_instance", sty.totalBreakdown)}
                decorations={["secondaryCard"]}
              />
            }
            title={
              <Title
                data-plasmic-name={"title"}
                data-plasmic-override={overrides.title}
                className={classNames("__wab_instance", sty.title)}
              >
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"Apartament \n"}
                </div>

                {p.renderPlasmicSlot({
                  defaultContents: "0",
                  value: args.apartmentNumber
                })}
              </Title>
            }
            withFooter={true}
          >
            <ConsumptionIndexCard
              data-plasmic-name={"consumptionIndexCard"}
              data-plasmic-override={overrides.consumptionIndexCard}
              className={classNames("__wab_instance", sty.consumptionIndexCard)}
              consumptionPlace={"WC"}
            />
          </Page>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "backButton",
    "page",
    "title",
    "text",
    "consumptionIndexCard",
    "enterIdxBtn",
    "totalBreakdown"
  ],
  backButton: ["backButton"],
  page: [
    "page",
    "title",
    "text",
    "consumptionIndexCard",
    "enterIdxBtn",
    "totalBreakdown"
  ],
  title: ["title", "text"],
  text: ["text"],
  consumptionIndexCard: ["consumptionIndexCard"],
  enterIdxBtn: ["enterIdxBtn"],
  totalBreakdown: ["totalBreakdown"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  backButton: "div";
  page: typeof Page;
  title: typeof Title;
  text: "div";
  consumptionIndexCard: typeof ConsumptionIndexCard;
  enterIdxBtn: typeof Button;
  totalBreakdown: typeof CardWall;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWaterConsumption__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWaterConsumption__VariantsArgs;
    args?: PlasmicWaterConsumption__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWaterConsumption__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicWaterConsumption__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicWaterConsumption__ArgProps,
          internalVariantPropNames: PlasmicWaterConsumption__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicWaterConsumption__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWaterConsumption";
  } else {
    func.displayName = `PlasmicWaterConsumption.${nodeName}`;
  }
  return func;
}

export const PlasmicWaterConsumption = Object.assign(
  // Top-level PlasmicWaterConsumption renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    backButton: makeNodeComponent("backButton"),
    page: makeNodeComponent("page"),
    title: makeNodeComponent("title"),
    text: makeNodeComponent("text"),
    consumptionIndexCard: makeNodeComponent("consumptionIndexCard"),
    enterIdxBtn: makeNodeComponent("enterIdxBtn"),
    totalBreakdown: makeNodeComponent("totalBreakdown"),

    // Metadata about props expected for PlasmicWaterConsumption
    internalVariantProps: PlasmicWaterConsumption__VariantProps,
    internalArgProps: PlasmicWaterConsumption__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicWaterConsumption;
/* prettier-ignore-end */
