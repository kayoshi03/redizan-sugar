import * as React from "react";
import {NavLink, Link,useLocation} from "react-router-dom";
import {ReactElement} from "react";
import style from "./style.module.scss"
export interface ILink {
    title: string
    path: string
    icon?: ReactElement<SVGElement>
    nav: "link" | "nav"
}

const  LinkUI:React.FC<ILink> = ({title, nav, path, icon}) => {
    const match = useLocation()
    const active = ({ isActive }) => {
        if(isActive && match.pathname + match.hash === path) {
            return style.link + ' ' + style.active
        }
        else  {
            return style.link
        }
    }
    return (
        nav ? nav === "link" ?
        <Link className={style.link} to={path}>
            {icon}
            <p>{title}</p>
        </Link>
            :
        <NavLink className={active} to={path}>
            {icon}
            <p>{title}</p>
        </NavLink> : <></>
    )
}

export default LinkUI