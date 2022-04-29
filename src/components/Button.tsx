import * as React from "react";
import {
  PlasmicButton,
  DefaultButtonProps,
} from "./plasmic/apa_nova_app/PlasmicButton";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps,
} from "@plasmicapp/react-web";
import Spinner from "./proprietary/loaders/Spinner";

export interface ButtonProps extends DefaultButtonProps {
  isLoading?: boolean;
}

function Button_({ isLoading, ...props }: ButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton.useBehavior<ButtonProps>(props, ref);

  plasmicProps.overrides.contentContainer = {
    render: (props, Component) => (
      <>
        {isLoading && <Spinner />}
        <Component {...props} />
      </>
    ),
  };

  return <PlasmicButton {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<ButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<ButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Button = React.forwardRef(Button_) as any as ButtonComponentType;

export default Object.assign(Button, {
  __plumeType: "button",
});
