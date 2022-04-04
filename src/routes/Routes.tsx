import { Route, Routes as ReactRouter } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import SearchPage from "../pages/SearchPage";

function Routes() {
  return (
    <ReactRouter>
      <Route path="/" element={<LandingPage />} />
      <Route path="/search" element={<SearchPage />} />
    </ReactRouter>
  );
}

export default Routes;
