import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import UserData from "./components/UserData.jsx";
import UpdateData from "./components/UpdateData.jsx";
import JobListing from "./components/JobListing.jsx";
import AdminRegister from "./components/AdminRegister.jsx";
import JobPostingForm from "./components/JobPostingForm.jsx";
import DeleteProfile from "./components/DeleteProfile.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Success from "./components/Success.jsx";
import Testinomials from "./components/Testinomials.jsx";
import Blog from "./components/Blog.jsx";
import Pricing from "./components/Pricing.jsx";
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
  },
  {
    path:"/employer",
    element: <AdminRegister />
  },
  {
    path:"/post-job",
    element: <JobPostingForm />
  },
  {
    path:"/Delete-user",
    element: <DeleteProfile />
  },
  {
    path:"/about-us",
    element: <AboutUs />
  },
  {
    path:"/contact-us",
    element: <ContactUs />
  },
  {
    path:"/success",
    element: <Success />
  },
  {
    path:"/testinomials",
    element: <Testinomials />
  },
  {
    path:"/blogs",
    element: <Blog />
  },
  {
    path:"/pricing",
    element: <Pricing />
  },
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
