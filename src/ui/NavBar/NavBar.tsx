import {RouteApp} from "@/strings/routes/strings.tsx";
import LinkUI, {ILink} from "@/ui/Link/LinkUI.tsx";

const NavBar = () => {
    return (
        <nav>
            {
                RouteApp.map((item: ILink) => (
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
    )
}

export default NavBar