import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Root from "./pages/Root"
import FrontPage from "./pages/FrontPage"
import TempEdit from "./pages/TempEdit" // temporary page
import Profile from "./pages/Profile"
import Services from "./pages/Services"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" element={<Root />}>
            {/* place your routes here so the navbar will be visible */}
            <Route path="" element={<FrontPage />} />
            <Route path="edit" element={<TempEdit />} />
            <Route path="profile/:id" element={<Profile />} />
            <Route path="services" element={<Services />} />
        </Route>
    )
)

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App
