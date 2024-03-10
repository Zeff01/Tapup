import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Root from "./pages/Root"
import FrontPage from "./pages/FrontPage"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" element={<Root />}>
            {/* place your routes here so the navbar will be visible */}
            <Route path="" element={<FrontPage />} />
        </Route>
    )
)

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App
