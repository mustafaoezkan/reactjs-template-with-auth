import { Route, Routes } from "react-router-dom";
import Layout from "./components/general/Layout";
import RequireAuth from "./components/general/RequireAuth";

import "./app.css";
import Missing from "./components/general/Missing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
        {/* Private routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<div>Home</div>} />
        </Route>
        {/* Missing routes */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
