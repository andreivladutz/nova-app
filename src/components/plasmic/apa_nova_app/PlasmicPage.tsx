// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: greMf1VEQkt4MFPhQZJ1ua
// Component: ObT6vFZq55k
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
import Title from "../../Title"; // plasmic-import: HmqbxqWFFW/component
import CardWall from "../../CardWall"; // plasmic-import: WfeXSi13l0/component
import IconRow from "../../IconRow"; // plasmic-import: ODN3YJ6SGk/component
import Button from "../../Button"; // plasmic-import: JGQhBxRoWTE/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_apa_nova_app.module.css"; // plasmic-import: greMf1VEQkt4MFPhQZJ1ua/projectcss
import sty from "./PlasmicPage.module.css"; // plasmic-import: ObT6vFZq55k/css

import DropletsvgIcon from "./icons/PlasmicIcon__Dropletsvg"; // plasmic-import: WQp4tVEOm/icon
import DatesvgIcon from "./icons/PlasmicIcon__Datesvg"; // plasmic-import: ecCv7ecZt/icon
import CashsvgIcon from "./icons/PlasmicIcon__Cashsvg"; // plasmic-import: y9CJLHvYa/icon
import CalendarChecksvgIcon from "./icons/PlasmicIcon__CalendarChecksvg"; // plasmic-import: _S25c9xo2/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: Bt309EfSp_c/icon
import DownloadsvgIcon from "./icons/PlasmicIcon__Downloadsvg"; // plasmic-import: GNssASFgbV/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: EHycK_nnkfH/icon

export type PlasmicPage__VariantMembers = {
  withFooter: "withFooter";
};

export type PlasmicPage__VariantsArgs = {
  withFooter?: SingleBooleanChoiceArg<"withFooter">;
};

type VariantPropType = keyof PlasmicPage__VariantsArgs;
export const PlasmicPage__VariantProps = new Array<VariantPropType>(
  "withFooter"
);

export type PlasmicPage__ArgsType = {
  title?: React.ReactNode;
  children?: React.ReactNode;
  cta?: React.ReactNode;
  footer?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPage__ArgsType;
export const PlasmicPage__ArgProps = new Array<ArgPropType>(
  "title",
  "children",
  "cta",
  "footer"
);

export type PlasmicPage__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultPageProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  cta?: React.ReactNode;
  footer?: React.ReactNode;
  withFooter?: SingleBooleanChoiceArg<"withFooter">;
  className?: string;
}

function PlasmicPage__RenderFunc(props: {
  variants: PlasmicPage__VariantsArgs;
  args: PlasmicPage__ArgsType;
  overrides: PlasmicPage__OverridesType;

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
        sty.root,
        {
          [sty.rootwithFooter]: hasVariant(variants, "withFooter", "withFooter")
        }
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox___1OfBb)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <Title className={classNames("__wab_instance", sty.title__woRRs)} />
          ),

          value: args.title
        })}
      </div>

      {p.renderPlasmicSlot({
        defaultContents: (
          <CardWall
            cardContent={
              <React.Fragment>
                <IconRow
                  className={classNames("__wab_instance", sty.iconRow__t8GOu)}
                  iconEntry={
                    <DatesvgIcon
                      className={classNames(projectcss.all, sty.svg__cntwq)}
                      role={"img"}
                    />
                  }
                  visualVariations={["defaultColor"]}
                >
                  {"14.03.2022"}
                </IconRow>

                <IconRow
                  className={classNames("__wab_instance", sty.iconRow__p8V1D)}
                  iconEntry={
                    <CashsvgIcon
                      className={classNames(projectcss.all, sty.svg___61NaU)}
                      role={"img"}
                    />
                  }
                  visualVariations={["defaultColor"]}
                >
                  {"Total de plată: 160 lei"}
                </IconRow>

                <IconRow
                  className={classNames("__wab_instance", sty.iconRow__kvB61)}
                  iconEntry={
                    <CalendarChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__zSrxa)}
                      role={"img"}
                    />
                  }
                  visualVariations={["defaultColor"]}
                >
                  {"Data scadentă: 29.03.2022"}
                </IconRow>
              </React.Fragment>
            }
            cardCta={
              <Button
                btnType={"secondary" as const}
                className={classNames("__wab_instance", sty.button___1Mbl2)}
                endIcon={
                  <DownloadsvgIcon
                    className={classNames(projectcss.all, sty.svg___75ASg)}
                    role={"img"}
                  />
                }
                shape={"rounded" as const}
                showEndIcon={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6NPOq
                  )}
                >
                  {"Vezi factura"}
                </div>
              </Button>
            }
            cardTitle={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__eUhzc
                )}
              >
                {
                  "Ultima factură  pentru consumul de apă a fost emisă de ApaNova."
                }
              </div>
            }
            className={classNames("__wab_instance", sty.cardWall__g1QKp)}
          />
        ),

        value: args.children
      })}

      {p.renderPlasmicSlot({
        defaultContents: (
          <CardWall
            bgHidden={true}
            cardCta={
              <Button
                btnType={"primary" as const}
                className={classNames("__wab_instance", sty.button___73Oyb)}
                shape={"rounded" as const}
                showEndIcon={true}
              >
                {"Introducere Index"}
              </Button>
            }
            cardType={"ctaOnly" as const}
            className={classNames("__wab_instance", sty.cardWall__kbvga)}
          />
        ),

        value: args.cta
      })}

      {(hasVariant(variants, "withFooter", "withFooter") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__hm8Hu, {
            [sty.freeBoxwithFooter__hm8HuCxtSg]: hasVariant(
              variants,
              "withFooter",
              "withFooter"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: null,
            value: args.footer
          })}
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPage__VariantsArgs;
    args?: PlasmicPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPage__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPage__ArgProps,
          internalVariantPropNames: PlasmicPage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPage";
  } else {
    func.displayName = `PlasmicPage.${nodeName}`;
  }
  return func;
}

export const PlasmicPage = Object.assign(
  // Top-level PlasmicPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPage
    internalVariantProps: PlasmicPage__VariantProps,
    internalArgProps: PlasmicPage__ArgProps
  }
);

export default PlasmicPage;
/* prettier-ignore-end */
