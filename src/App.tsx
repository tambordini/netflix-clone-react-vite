import Login from "@pages/Login";
import Main from "@pages/Main";
import NotFound from "@pages/NotFound";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />'
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
