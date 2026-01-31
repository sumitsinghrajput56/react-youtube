import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import "./index.css";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "Watch",
        element: <WatchPage />,
      },
       {
        path: "Demo",
        element: <Demo />,
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />

        
        {/* Head
Body
    Sidebar 
      MenuItems
MainContainer
    ButtonList
    VideoContainer
    Videocard */}
      </div>
    </Provider>
  );
}

export default App;
