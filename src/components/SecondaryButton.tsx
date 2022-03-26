import * as React from "react";
import {
  PlasmicSecondaryButton,
  DefaultSecondaryButtonProps
} from "./plasmic/apa_nova_app/PlasmicSecondaryButton";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface SecondaryButtonProps extends DefaultSecondaryButtonProps {}

function SecondaryButton_(props: SecondaryButtonProps, ref: ButtonRef) {
  const { plasmicProps } =
    PlasmicSecondaryButton.useBehavior<SecondaryButtonProps>(props, ref);
  return <PlasmicSecondaryButton {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<SecondaryButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<SecondaryButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const SecondaryButton = React.forwardRef(
  SecondaryButton_
) as any as ButtonComponentType;

export default Object.assign(SecondaryButton, {
  __plumeType: "button"
});
