import { PlasmicCanvasHost } from "@plasmicapp/host";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppCtxProvider } from "./contexts/AppCtxProvider";
import Homepage from "./pages/Homepage";
import WaterConsumption from "./pages/WaterConsumption";

import "./plasmic-host";
import { ROUTES } from "./utils/CONST";

const queryClient = new QueryClient();

function Index() {
  return (
    <Routes>
      <Route path={ROUTES.HOMEPAGE} element={<Homepage />} />
      <Route path={ROUTES.WATER_CONSUMPTION} element={<WaterConsumption />} />
      <Route path={ROUTES.PLASMIC_HOST} element={<PlasmicCanvasHost />} />
    </Routes>
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
