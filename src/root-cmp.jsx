import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router";
import { AppHeader } from "./cmps/AppHeader";
import { AppFooter } from "./cmps/AppFooter";
import routes from "./routes";

export function RootCmp() {
  return (
    <div className="root-cmp">
      <AppHeader />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            exact={true}
            element={route.component}
            path={route.path}
          />
        ))}
        {/* <Route path="user/:id" element={<UserDetails />} /> */}
      </Routes>
      <AppFooter />
    </div>
  );
}
