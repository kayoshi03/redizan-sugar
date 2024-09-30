import {RouteApp} from "@/strings/routes/strings.tsx";
import LinkUI, {ILink} from "@/ui/Link/LinkUI.tsx";
import Logotype from "@/ui/Logotype/Logotype.tsx";
import style from "./style.module.scss"


const Header:React.FC = () => {
    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.wrapper}>
                    <Logotype/>
                    <nav>
                        {
                            RouteApp.map((item:ILink) => (
                                <LinkUI
                                    key={item.title}
                                    title={item.title}
                                    path={item.path}
                                    nav={item.nav}
                                    icon={item?.icon}
                                />
                            ))
                        }
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header