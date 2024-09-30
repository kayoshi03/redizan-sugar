import {Routes, Route, Navigate} from "react-router-dom";
import {HomePage} from "@/pages/app/home/HomePage.tsx";
import {Layout} from "@/pages/app/layout/Layout.tsx";



const App = () => {
  return (
      <Routes>
        <Route
            path="/app"
            element={<Layout/>}
        >
            <Route
                path={"home"}
                element={<HomePage/>}
            />
            <Route
                path={"test"}
                element={<HomePage/>}
            />
        </Route>
          <Route
              path="/*"
              element={<Navigate to="app/home" />}
          />
      </Routes>
  )
}

export default App
