import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import useMousePositionCSS from "./hooks/useMousePositionCSS";
import ReactLenis from "lenis/react";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>,
  ),
);

function App() {
  useMousePositionCSS();

  return <RouterProvider router={router} />;

  return (
    <ReactLenis root>
      <RouterProvider router={router} />
    </ReactLenis>
  );
}

export default App;
