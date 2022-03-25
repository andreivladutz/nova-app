import { PlasmicCanvasHost } from "@plasmicapp/host";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";

import "./plasmic-host";

function Index() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/plasmic-host" element={<PlasmicCanvasHost />} />
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
