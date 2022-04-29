import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CLIENT_ERR_CODES, QS_PARAMS, ROUTES } from "../utils/CONST";
import throwingDefault from "./utils/throwingDefault";

const useAppStateProvider = () => {
  const { USER_TOKEN } = QS_PARAMS;

  // A way to keep track of the previous routes we've been on
  // as a way to add small improvements to the goBack behavior
  const [previousRoutes, setPreviousRoutes] = useState<ROUTES[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamToken = searchParams.get(USER_TOKEN);
  const localStorageToken = localStorage.getItem(USER_TOKEN);

  const [userToken] = useState(searchParamToken || localStorageToken);
  const [appError, setAppError] = useState<CLIENT_ERR_CODES | null>(
    !userToken ? CLIENT_ERR_CODES.MISSING_USER_TOKEN : null
  );

  // We should keep the token both in the qs and in the localStorage, so covering:
  // - token is coming from the qs, also store it in the localStorage
  // - token is not in the qs, set it in the qs from the localStorage
  // - token is in both places, then no-op
  useEffect(() => {
    if (!userToken) {
      return;
    }

    !localStorageToken && localStorage.setItem(USER_TOKEN, userToken);
    !searchParamToken &&
      setSearchParams(
        {
          [USER_TOKEN]: userToken,
        },
        { replace: true }
      );
  }, [
    USER_TOKEN,
    localStorageToken,
    searchParamToken,
    setSearchParams,
    userToken,
  ]);

  return {
    userToken,

    previousRoutes,
    setPreviousRoutes,

    appError,
    setAppError,
  };
};

type AppCtxProps = ReturnType<typeof useAppStateProvider>;
const AppCtx = React.createContext<AppCtxProps>(throwingDefault("AppContext"));

export const AppCtxProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const state = useAppStateProvider();

  return (
    <AppCtx.Provider value={state}>
      <div>{children}</div>
    </AppCtx.Provider>
  );
};

export const useAppCtx = () => React.useContext(AppCtx);
