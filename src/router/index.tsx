import DetailPage from "@/pages/detail/DetailPage";
import SearchPage from "@/pages/search/SearchPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/detail/:id",
    element: <DetailPage />,
  },
]);
