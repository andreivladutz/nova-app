import { PlasmicCanvasHost } from "@plasmicapp/host";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppCtxProvider } from "./contexts/AppCtxProvider";
import Homepage from "./components/pages/Homepage";
import WaterConsumption from "./components/pages/WaterConsumption";

import "./plasmic-host";
import { ROUTES, STYLING } from "./utils/CONST";

import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const queryClient = new QueryClient();

const {
  SKELETONS: { BASE_COLOR, HIGHLIGHT_COLOR },
} = STYLING;

function Index() {
  return (
    <SkeletonTheme baseColor={BASE_COLOR} highlightColor={HIGHLIGHT_COLOR}>
      <Routes>
        <Route path={ROUTES.HOMEPAGE} element={<Homepage />} />
        <Route path={ROUTES.WATER_CONSUMPTION} element={<WaterConsumption />} />
        <Route path={ROUTES.PLASMIC_HOST} element={<PlasmicCanvasHost />} />
      </Routes>
    </SkeletonTheme>
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppCtxProvider>
          <Index />
        </AppCtxProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
