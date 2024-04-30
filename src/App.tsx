import './App.css'
import CreateOrderPage from "./order/presentation/page/CreateOrderPage.tsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import GetOrdersPage from "./order/presentation/page/GetOrderPages.tsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/create-order",
            element: <CreateOrderPage />,
        },
        {
            path: "/orders",
            element: <GetOrdersPage />,
        }

    ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
