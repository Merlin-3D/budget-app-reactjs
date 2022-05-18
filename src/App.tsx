import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Application from "./layouts/application";
import { routes } from "./routes/routes";

function App() {
  return (
    <div className=" flex items-center justify-center h-full">
      <BrowserRouter>
        <Application>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        </Application>
      </BrowserRouter>
    </div>
  );
}

export default App;
