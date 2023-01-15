import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MultiPlayer from "./pages/MultiPlayer";
import SinglePlayer from "./pages/SinglePlayer";
import NotFound from "./pages/NotFound";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/single",
    element: <SinglePlayer />
  },
  {
    path: "/multi",
    element: <MultiPlayer />
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={route} />
      {/* <span className=" absolute top-0 left-0"></span> */}
      <div className=" text-neutral-400 m-8 absolute top-0 left-0">
        <a target="_blank" rel="noopener noreferrer" className="hover:text-[black]" href="https://github.com/iSickos">My Github</a> <br />
        <a target="_blank" rel="noopener noreferrer" className="hover:text-[black]" href="https://www.figma.com/community/file/1118034705042151458">Design{'(By Ivan Yañez)'}</a>
      </div>
    </div>
  );
}

export default App;
