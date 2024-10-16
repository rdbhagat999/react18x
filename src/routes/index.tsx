import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import Home from "../components/Home";
const PostList = lazy(() => import("../components/PostList"));
const UserList = lazy(() => import("../components/UserList"));

import LoadingComponent from "../components/LoadingComponent";

import App from "../App";

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/posts",
        element: (
          <Suspense fallback={<LoadingComponent text="posts" />}>
            <PostList />
          </Suspense>
        ),
      },
      {
        path: "/users",
        element: (
          <Suspense fallback={<LoadingComponent text="users" />}>
            <UserList />
          </Suspense>
        ),
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
