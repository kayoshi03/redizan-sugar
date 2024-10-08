import {Outlet} from "react-router-dom";
import Header from "@/components/Header/Header.tsx";
import {useAppSelector} from "@/hooks/redux.hooks.ts";
import Loading from "@/components/Loading/Loading.tsx";
import Footer from "@/components/Footer/Footer.tsx";

export const Layout = () => {
    const status = useAppSelector(state => state.quests.status)
    return (
        <>
            {
                status === "succeeded" ?
                    <>
                        <Header/>
                        <main>
                            <Outlet/>
                        </main>
                        <Footer/>
                    </>
                :
                <Loading/>
            }
        </>
    )
}