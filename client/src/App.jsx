import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
//todo
import TodoList from "./components/todos/TodoList";
import TodoUpdate from "./components/todos/TodoUpdate";
//user
import Register from "./auth/Register";
import Login from "./auth/Login";
import Logout from "./auth/Logout";

function App() {
  const router = createBrowserRouter([
    {
      path: "", element: <Root />,
      children: [
        //todos
        { path: "", element: <TodoList /> },
        { path: ":id", element: <TodoUpdate /> },
        //user
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "logout", element: <Logout /> },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
