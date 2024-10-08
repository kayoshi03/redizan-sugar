import Logotype from "@/ui/Logotype/Logotype.tsx";
import NavBar from "@/ui/NavBar/NavBar.tsx";
import style from "./style.module.scss"
import React, {useEffect, useState} from "react";

const Header:React.FC = () => {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header className={`${style.header} ${scroll ? style.scroll : ""}`}>
            <div className="container">
                <div className={style.wrapper}>
                    <Logotype/>
                    <NavBar/>
                </div>
            </div>
        </header>
    )
}

export default Header