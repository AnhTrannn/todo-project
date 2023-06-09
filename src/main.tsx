import { createRoot } from "react-dom/client";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/index";
import Login from "./pages/login";
import { useState } from "react";

const App = (): JSX.Element => {
  const [isAuthentication, setIsAuthentication] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home isAuthentication={isAuthentication} />,
    },

    {
      path: "/login",
      element: (
        <Login
          onSuccess={() => {
            setIsAuthentication(true);
          }}
        />
      ),
    },
  ]);

  return (
    <div className="bg-[#f5f5f5] py-0 px-[10%]">
      <RouterProvider router={router} />
    </div>
  );
};

createRoot(document.getElementById("app") as HTMLElement).render(<App />);
