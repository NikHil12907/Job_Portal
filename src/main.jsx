import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import UserData from "./components/UserData.jsx";
import UpdateData from "./components/UpdateData.jsx";
import JobListing from "./components/JobListing.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/complete-profile",
    element: <UserData />,
  },
  {
    path:"/update-profile",
    element: <UpdateData />
  },
  {
    path:"/find-job",
    element: <JobListing />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-bl2bpajawv8dtilk.us.auth0.com"
    clientId="N67yfYFNLFxsw6fNi4SRVAWueTGODTha"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
