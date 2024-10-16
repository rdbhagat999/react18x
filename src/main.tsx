import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { appRoutes } from "./routes";
import { store } from "./store.ts";
import App from "./App.tsx";
import GlobalSpinner from "./components/GlobalSpinner.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<GlobalSpinner />}>
      <Provider store={store}>
        <RouterProvider router={appRoutes}>
          <App />
        </RouterProvider>
      </Provider>
    </Suspense>
  </StrictMode>
);
