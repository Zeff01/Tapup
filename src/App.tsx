import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Root from "./pages/Root"

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<Root />}>
        {/* place your routes here so the navbar will be visible */}
      </Route>
    )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
