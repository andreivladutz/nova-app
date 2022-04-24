import { PlasmicCanvasHost } from "@plasmicapp/host";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppCtxProvider } from "./contexts/AppCtxProvider";
import Homepage from "./pages/Homepage";
import WaterConsumption from "./pages/WaterConsumption";

import "./plasmic-host";
import { ROUTES } from "./utils/CONST";

function Index() {
  return (
    <AppCtxProvider>
      <Routes>
        <Route path={ROUTES.HOMEPAGE} element={<Homepage />} />
        <Route path={ROUTES.WATER_CONSUMPTION} element={<WaterConsumption />} />
        <Route path={ROUTES.PLASMIC_HOST} element={<PlasmicCanvasHost />} />
      </Routes>
    </AppCtxProvider>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  );
};

export default App;
