import {Routes, Route, Navigate} from "react-router-dom";
import {HomePage} from "@/pages/app/home/HomePage.tsx";
import {Layout} from "@/pages/app/layout/Layout.tsx";
import {useGetQuests} from "@/hooks/useGetQuests.ts";
import useGetMainPhoto from "@/hooks/useGetMainPhoto.ts";
import AlbumsPage from "@/pages/app/albums/AlbumsPage.tsx";



const App = () => {
    useGetQuests()
    useGetMainPhoto()
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
                    path={"albums"}
                    element={<AlbumsPage/>}
                />
            </Route>
              <Route
                  path="/*"
                  element={<Navigate to="app/home/#main" />}
              />
        </Routes>
  )
}

export default App
