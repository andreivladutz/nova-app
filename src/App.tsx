import { PlasmicCanvasHost } from "@plasmicapp/host";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import WaterConsumption from "./components/WaterConsumption";

import "./plasmic-host";
import { ROUTES } from "./utils/CONST";

function Index() {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.HOMEPAGE} element={<Homepage />} />
        <Route path={ROUTES.WATER_CONSUMPTION} element={<WaterConsumption />} />
        <Route path={ROUTES.PLASMIC_HOST} element={<PlasmicCanvasHost />} />
      </Routes>
    </div>
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
