// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: greMf1VEQkt4MFPhQZJ1ua
// Component: VXVX0M5zp1Df
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
import CardWall from "../../CardWall"; // plasmic-import: WfeXSi13l0/component
import IconRow from "../../IconRow"; // plasmic-import: ODN3YJ6SGk/component
import SecondaryButton from "../../SecondaryButton"; // plasmic-import: O5dT0tkpxdk/component
import Button from "../../Button"; // plasmic-import: JGQhBxRoWTE/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_apa_nova_app.module.css"; // plasmic-import: greMf1VEQkt4MFPhQZJ1ua/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: VXVX0M5zp1Df/css

import DropletsvgIcon from "./icons/PlasmicIcon__Dropletsvg"; // plasmic-import: WQp4tVEOm/icon
import DatesvgIcon from "./icons/PlasmicIcon__Datesvg"; // plasmic-import: ecCv7ecZt/icon
import CashsvgIcon from "./icons/PlasmicIcon__Cashsvg"; // plasmic-import: y9CJLHvYa/icon
import MetersvgIcon from "./icons/PlasmicIcon__Metersvg"; // plasmic-import: R1BUPGBLI/icon
import CalendarChecksvgIcon from "./icons/PlasmicIcon__CalendarChecksvg"; // plasmic-import: _S25c9xo2/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: Bt309EfSp_c/icon
import DownloadsvgIcon from "./icons/PlasmicIcon__Downloadsvg"; // plasmic-import: GNssASFgbV/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: EHycK_nnkfH/icon

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  page?: p.Flex<typeof Page>;
  title?: p.Flex<typeof Title>;
  cardWall?: p.Flex<typeof CardWall>;
  issueDate?: p.Flex<typeof IconRow>;
  calendarIcon?: p.Flex<"svg">;
  payment?: p.Flex<typeof IconRow>;
  cashIcon?: p.Flex<"svg">;
  payment2?: p.Flex<typeof IconRow>;
  cashIcon2?: p.Flex<"svg">;
  dueDate?: p.Flex<typeof IconRow>;
  dueDateIcon?: p.Flex<"svg">;
  downloadBillBtn?: p.Flex<typeof SecondaryButton>;
  svg?: p.Flex<"svg">;
  hiddenCard?: p.Flex<typeof CardWall>;
  enterIdxBtn?: p.Flex<typeof Button>;
};

export interface DefaultHomepageProps {
  className?: string;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <React.Fragment>
      {}
      {}

      <p.Stack
        as={"div"}
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        hasGap={true}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.root
        )}
      >
        <Page
          data-plasmic-name={"page"}
          data-plasmic-override={overrides.page}
          className={classNames("__wab_instance", sty.page)}
          cta={
            <CardWall
              data-plasmic-name={"hiddenCard"}
              data-plasmic-override={overrides.hiddenCard}
              bgHidden={true}
              cardCta={
                <Button
                  data-plasmic-name={"enterIdxBtn"}
                  data-plasmic-override={overrides.enterIdxBtn}
                  btnType={"primary" as const}
                  className={classNames("__wab_instance", sty.enterIdxBtn)}
                  shape={"rounded" as const}
                  showEndIcon={true}
                >
                  {"Introducere Index"}
                </Button>
              }
              cardType={"ctaOnly" as const}
              className={classNames("__wab_instance", sty.hiddenCard)}
            />
          }
          title={
            <Title
              data-plasmic-name={"title"}
              data-plasmic-override={overrides.title}
              className={classNames("__wab_instance", sty.title)}
              hasIcon={true}
            />
          }
        >
          <CardWall
            data-plasmic-name={"cardWall"}
            data-plasmic-override={overrides.cardWall}
            cardContent={
              <React.Fragment>
                <IconRow
                  data-plasmic-name={"issueDate"}
                  data-plasmic-override={overrides.issueDate}
                  className={classNames("__wab_instance", sty.issueDate)}
                  iconEntry={
                    <DatesvgIcon
                      data-plasmic-name={"calendarIcon"}
                      data-plasmic-override={overrides.calendarIcon}
                      className={classNames(projectcss.all, sty.calendarIcon)}
                      role={"img"}
                    />
                  }
                  staticText={"Data emitere: "}
                  visualVariations={["defaultColor"]}
                >
                  {"14.03.2022"}
                </IconRow>

                <IconRow
                  data-plasmic-name={"payment"}
                  data-plasmic-override={overrides.payment}
                  className={classNames("__wab_instance", sty.payment)}
                  iconEntry={
                    <CashsvgIcon
                      data-plasmic-name={"cashIcon"}
                      data-plasmic-override={overrides.cashIcon}
                      className={classNames(projectcss.all, sty.cashIcon)}
                      role={"img"}
                    />
                  }
                  staticText={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gIh4D
                      )}
                    >
                      {"Total de plată: "}
                    </div>
                  }
                  visualVariations={["defaultColor"]}
                >
                  {"160 lei"}
                </IconRow>

                <IconRow
                  data-plasmic-name={"payment2"}
                  data-plasmic-override={overrides.payment2}
                  className={classNames("__wab_instance", sty.payment2)}
                  iconEntry={
                    <MetersvgIcon
                      data-plasmic-name={"cashIcon2"}
                      data-plasmic-override={overrides.cashIcon2}
                      className={classNames(projectcss.all, sty.cashIcon2)}
                      role={"img"}
                    />
                  }
                  staticText={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ctuW
                      )}
                    >
                      {"Consum total: "}
                    </div>
                  }
                  visualVariations={["defaultColor"]}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qj5Yw
                    )}
                  >
                    {"91 m³"}
                  </div>
                </IconRow>

                <IconRow
                  data-plasmic-name={"dueDate"}
                  data-plasmic-override={overrides.dueDate}
                  className={classNames("__wab_instance", sty.dueDate)}
                  iconEntry={
                    <CalendarChecksvgIcon
                      data-plasmic-name={"dueDateIcon"}
                      data-plasmic-override={overrides.dueDateIcon}
                      className={classNames(projectcss.all, sty.dueDateIcon)}
                      role={"img"}
                    />
                  }
                  staticText={"Data scadentă: "}
                  visualVariations={["defaultColor"]}
                >
                  {"29.03.2022"}
                </IconRow>
              </React.Fragment>
            }
            cardCta={
              <SecondaryButton
                data-plasmic-name={"downloadBillBtn"}
                data-plasmic-override={overrides.downloadBillBtn}
                btnType={"secondary" as const}
                className={classNames("__wab_instance", sty.downloadBillBtn)}
                endIcon={
                  <DownloadsvgIcon
                    data-plasmic-name={"svg"}
                    data-plasmic-override={overrides.svg}
                    className={classNames(projectcss.all, sty.svg)}
                    role={"img"}
                  />
                }
                shape={"rounded" as const}
                showEndIcon={true}
              >
                {"Vezi factura"}
              </SecondaryButton>
            }
            cardTitle={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__sfLcu
                )}
              >
                {
                  "Ultima factură  pentru consumul de apă a fost emisă de ApaNova."
                }
              </div>
            }
            className={classNames("__wab_instance", sty.cardWall)}
          />
        </Page>
      </p.Stack>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "page",
    "title",
    "cardWall",
    "issueDate",
    "calendarIcon",
    "payment",
    "cashIcon",
    "payment2",
    "cashIcon2",
    "dueDate",
    "dueDateIcon",
    "downloadBillBtn",
    "svg",
    "hiddenCard",
    "enterIdxBtn"
  ],
  page: [
    "page",
    "title",
    "cardWall",
    "issueDate",
    "calendarIcon",
    "payment",
    "cashIcon",
    "payment2",
    "cashIcon2",
    "dueDate",
    "dueDateIcon",
    "downloadBillBtn",
    "svg",
    "hiddenCard",
    "enterIdxBtn"
  ],
  title: ["title"],
  cardWall: [
    "cardWall",
    "issueDate",
    "calendarIcon",
    "payment",
    "cashIcon",
    "payment2",
    "cashIcon2",
    "dueDate",
    "dueDateIcon",
    "downloadBillBtn",
    "svg"
  ],
  issueDate: ["issueDate", "calendarIcon"],
  calendarIcon: ["calendarIcon"],
  payment: ["payment", "cashIcon"],
  cashIcon: ["cashIcon"],
  payment2: ["payment2", "cashIcon2"],
  cashIcon2: ["cashIcon2"],
  dueDate: ["dueDate", "dueDateIcon"],
  dueDateIcon: ["dueDateIcon"],
  downloadBillBtn: ["downloadBillBtn", "svg"],
  svg: ["svg"],
  hiddenCard: ["hiddenCard", "enterIdxBtn"],
  enterIdxBtn: ["enterIdxBtn"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  page: typeof Page;
  title: typeof Title;
  cardWall: typeof CardWall;
  issueDate: typeof IconRow;
  calendarIcon: "svg";
  payment: typeof IconRow;
  cashIcon: "svg";
  payment2: typeof IconRow;
  cashIcon2: "svg";
  dueDate: typeof IconRow;
  dueDateIcon: "svg";
  downloadBillBtn: typeof SecondaryButton;
  svg: "svg";
  hiddenCard: typeof CardWall;
  enterIdxBtn: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    page: makeNodeComponent("page"),
    title: makeNodeComponent("title"),
    cardWall: makeNodeComponent("cardWall"),
    issueDate: makeNodeComponent("issueDate"),
    calendarIcon: makeNodeComponent("calendarIcon"),
    payment: makeNodeComponent("payment"),
    cashIcon: makeNodeComponent("cashIcon"),
    payment2: makeNodeComponent("payment2"),
    cashIcon2: makeNodeComponent("cashIcon2"),
    dueDate: makeNodeComponent("dueDate"),
    dueDateIcon: makeNodeComponent("dueDateIcon"),
    downloadBillBtn: makeNodeComponent("downloadBillBtn"),
    svg: makeNodeComponent("svg"),
    hiddenCard: makeNodeComponent("hiddenCard"),
    enterIdxBtn: makeNodeComponent("enterIdxBtn"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
