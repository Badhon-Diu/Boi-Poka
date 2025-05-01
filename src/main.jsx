import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Hero from "./Hero";
import "./index.css";
import Mainpage from "./Mainpage";
import SingleBookDetails from "./SingleBookDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage></Mainpage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "home",
        element: <Hero></Hero>,
        // loader: () => fetch("bookdata.json"),
      },
      {
        path: "/home/book/:id",
        element: <SingleBookDetails></SingleBookDetails>,
        loader: () => fetch("bookdata.json"),
      },
      {
        //path : "/"
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
