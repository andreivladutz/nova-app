import * as React from "react";
import {
  PlasmicTextInput,
  DefaultTextInputProps
} from "./plasmic/apa_nova_app/PlasmicTextInput";
import { TextInputRef } from "@plasmicapp/react-web";

interface TextInputProps extends DefaultTextInputProps {}

function TextInput_(props: TextInputProps, ref: TextInputRef) {
  const { plasmicProps } = PlasmicTextInput.useBehavior<TextInputProps>(
    props,
    ref
  );

  const [value, setValue] = React.useState("");

  return <PlasmicTextInput 
    {...plasmicProps}
    value={value}
    onChange={(e) => {
      const inputEl = e.target as HTMLInputElement;
      setValue(inputEl.value);
    }}
  />;
}

const TextInput = React.forwardRef(TextInput_);

export default Object.assign(TextInput, {
  __plumeType: "text-input"
});
