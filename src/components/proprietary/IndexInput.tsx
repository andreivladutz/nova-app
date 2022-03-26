import React from "react";
import ReactCodeInput from "react-code-input";
import ErrorMessage from "../ErrorMessage";

const INDEX_LEN = 5;
const ERR_MSG = {
  TOO_SHORT: `Indexul trebuie să aibă ${INDEX_LEN} caractere.`,
  INDEX_SMALLER: "Indexul nu poate fi mai mic decât ultimul index înregistrat.",
};

const zeros = (length: number) =>
  Array.from({ length })
    .map(() => "0")
    .join("");

export const IndexInput = () => {
  const [indexVal, setIndexVal] = React.useState(zeros(INDEX_LEN));
  const [isValid, setIsValid] = React.useState(true);
  const [errMessages, setErrMessages] = React.useState<string[]>([]);

  const onChange = (newIdx: string) => {
    setIndexVal(newIdx);

    if (newIdx.length < INDEX_LEN) {
      setErrMessages(Array.from(new Set([...errMessages, ERR_MSG.TOO_SHORT])));
      return setIsValid(false);
    }

    if (!isValid) {
      setErrMessages([]);
      setIsValid(true);
    }
  };

  return (
    <>
      <ReactCodeInput
        name="index-input"
        type="number"
        value={indexVal}
        fields={INDEX_LEN}
        inputMode="numeric"
        onChange={onChange}
        isValid={isValid}
      />
      {errMessages.map((errMsg, idx) => (
        <ErrorMessage key={idx}>{errMsg}</ErrorMessage>
      ))}
    </>
  );
};
