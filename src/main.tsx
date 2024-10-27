import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import AppRouterComponent from "./routes/index.tsx";
import GlobalSpinner from "./components/GlobalSpinner.tsx";

import { store } from "./store.ts";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<GlobalSpinner />}>
      <Provider store={store}>
        <AppRouterComponent />
      </Provider>
    </Suspense>
  </StrictMode>
);
