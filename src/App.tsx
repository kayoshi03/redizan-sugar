import * as React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {Layout} from "./pages/app/layout/Layout.tsx";
import {HomePage} from "./pages/app/home/HomePage.tsx";

const App:React.FC = () => {
  return (
      <Routes>
          <Route path="/*" element={<Navigate to="app/home" />}/>
        <Route
            path="/app"
            element={<Layout/>}
        >
            <Route
                index
                path={"home"}
                element={<HomePage/>}
            />
        </Route>
      </Routes>
  )
}

export default App