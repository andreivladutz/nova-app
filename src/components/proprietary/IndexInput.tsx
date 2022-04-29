import React, { Dispatch, SetStateAction } from "react";
import ReactCodeInput from "react-code-input";
import { CLIENT_ERR_CODES, ERRORS_LOCALIZED } from "../../utils/CONST";
import ErrorMessage from "../ErrorMessage";

const INDEX_LEN = 5;
const ERR_MSG = {
  TOO_SHORT: `Indexul trebuie să aibă ${INDEX_LEN} caractere.`,
  INDEX_SMALLER: ERRORS_LOCALIZED[CLIENT_ERR_CODES.CONSUMPTION_INDEX_IS_LOWER],
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
  const [errMessage, setErrMessage] = React.useState<string | undefined>();

  const onChange = (newIdx: string) => {
    setCurrIndexVal(parseInt(newIdx));

    if (newIdx.length < INDEX_LEN) {
      setErrMessage(ERR_MSG.TOO_SHORT);
      return setIsValid(false);
    }

    if (parseInt(newIdx) < prevIndexVal) {
      setErrMessage(ERR_MSG.INDEX_SMALLER);
      return setIsValid(false);
    }

    if (!isValid) {
      setErrMessage(undefined);
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
      {errMessage && <ErrorMessage>{errMessage}</ErrorMessage>}
    </>
  );
};
