import { CLIENT_ERR_CODES, ERRORS_LOCALIZED } from "../../utils/CONST";
import ErrorMessage from "../ErrorMessage";

const localizeErr = (errCode: CLIENT_ERR_CODES) =>
  ERRORS_LOCALIZED[errCode] || ERRORS_LOCALIZED[CLIENT_ERR_CODES.GENERIC_ERROR];

type Props = {
  children: CLIENT_ERR_CODES | null;
};

const AppError = ({ children }: Props) => {
  if (children === null) {
    return null;
  }

  return <ErrorMessage>{localizeErr(children)}</ErrorMessage>;
};

export default AppError;
