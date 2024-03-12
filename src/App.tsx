import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Root from "./pages/Root"
import FrontPage from "./pages/FrontPage"
import TempEdit from "./pages/TempEdit" // temporary page

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" element={<Root />}>
            {/* place your routes here so the navbar will be visible */}
            <Route path="" element={<FrontPage />} />
            <Route path="edit" element={<TempEdit />} />
        </Route>
    )
)

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App
