import React, { Dispatch, SetStateAction } from "react";
import ReactCodeInput from "react-code-input";
import ErrorMessage from "../ErrorMessage";

const INDEX_LEN = 5;
const ERR_MSG = {
  TOO_SHORT: `Indexul trebuie să aibă ${INDEX_LEN} caractere.`,
  INDEX_SMALLER: "Indexul nu poate fi mai mic decât ultimul index înregistrat.",
};

const zeroPadding = (value: number, length: number) =>
  value.toString().padStart(length, "0");

type Props = {
  currIndexVal: number;
  setCurrIndexVal: Dispatch<SetStateAction<number>>;

  isValid: boolean;
  setIsValid: Dispatch<SetStateAction<boolean>>;

  prevIndexVal: number;
};

export const IndexInput = ({
  currIndexVal = 0,
  setCurrIndexVal = () => {},
  isValid = true,
  setIsValid = () => {},
  prevIndexVal = 0,
}: Props) => {
  const [errMessages, setErrMessages] = React.useState<string[]>([]);

  const onChange = (newIdx: string) => {
    setCurrIndexVal(parseInt(newIdx));

    if (newIdx.length < INDEX_LEN) {
      setErrMessages(Array.from(new Set([...errMessages, ERR_MSG.TOO_SHORT])));
      return setIsValid(false);
    }

    if (parseInt(newIdx) < prevIndexVal) {
      setErrMessages(
        Array.from(new Set([...errMessages, ERR_MSG.INDEX_SMALLER]))
      );
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
        value={zeroPadding(currIndexVal, INDEX_LEN)}
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
