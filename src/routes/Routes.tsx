import { Route, Routes as ReactRouter } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import SearchPage from "../pages/SearchPage";
import StorePage from "../pages/StorePage";

function Routes() {
  return (
    <ReactRouter>
      <Route path="/" element={<LandingPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/store" element={<StorePage />} />
    </ReactRouter>
  );
}

export default Routes;
