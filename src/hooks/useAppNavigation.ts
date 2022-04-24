import { useLocation, useNavigate } from "react-router-dom";
import { useAppCtx } from "../contexts/AppCtxProvider";
import { ROUTES } from "../utils/CONST";

const useAppNavigation = () => {
  const { previousRoutes, setPreviousRoutes } = useAppCtx();
  const navigate = useNavigate();
  const location = useLocation();

  return {
    navigate(to: ROUTES) {
      navigate(to);
      setPreviousRoutes((currPrevRoutes) => [
        ...currPrevRoutes,
        location.pathname as ROUTES,
      ]);
    },

    goBackTo(to: ROUTES) {
      // If we're going to land on the correct route than prefer
      // using the "go back" functionality
      if (previousRoutes[previousRoutes.length - 1] === to) {
        // Discard the last element of the "history stack"
        setPreviousRoutes((currPrevRoutes) => {
          const [, ...newHistoryStack] = currPrevRoutes.reverse();
          return newHistoryStack.reverse();
        });

        return navigate(-1);
      }

      // Otherwise, if there is not a known previous route
      // Prefer the navigation by replacing the current route
      navigate(to, { replace: true });
    },
  };
};

export default useAppNavigation;
