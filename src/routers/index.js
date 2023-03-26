import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopPage from "../Pages/TopPage";
import RecordPage from "../Pages/RecordPage";
import ColumnPage from "../Pages/ColumnPage";
import CommonLayout from "../layouts/CommonLayout";

export default function Routers() {
  return (
    <Router>
      <CommonLayout>
        <Routes>
          <Route exact path="/my-record" element={<RecordPage />} />
          <Route exact path="/column-page" element={<ColumnPage />} />
          <Route exact path="/top-page" element={<TopPage />} />
          <Route exact path="/" element={<TopPage />} />
        </Routes>
      </CommonLayout>
    </Router>
  );
}
