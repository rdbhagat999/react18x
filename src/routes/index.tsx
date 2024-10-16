import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

const PostList = lazy(() => import("../components/PostList"));
const UserList = lazy(() => import("../components/UserList"));

import Home from "../components/Home";

import LoadingComponent from "../components/LoadingComponent";

import App from "../App";

import GlobalErrorComponent from "../components/GlobalErrorComponent";
import ErrorComponent from "../components/ErrorComponent";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <GlobalErrorComponent />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => null,
        errorElement: <ErrorComponent />,
      },
      {
        path: "/posts",
        loader: () => null,
        element: (
          <Suspense fallback={<LoadingComponent text="posts" />}>
            <PostList />
          </Suspense>
        ),
        errorElement: <ErrorComponent />,
      },
      {
        path: "/users",
        element: (
          <Suspense fallback={<LoadingComponent text="users" />}>
            <UserList />
          </Suspense>
        ),
        loader: () => null,
        errorElement: <ErrorComponent />,
      },
      //   {
      //     path: "/dashboard",
      //     element: (
      //       <RequireAuth>
      //         <Dashboard />
      //       </RequireAuth>
      //     ),
      //     RouteName: "Dashboard",
      //     protected: true,
      //   },
    ],
  },
]);

export default function AppRouterComponent() {
  return (
    <>
      <RouterProvider router={appRoutes} />
    </>
  );
}
