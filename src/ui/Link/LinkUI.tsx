import * as React from "react";
import { Link,useLocation} from "react-router-dom";
import { NavHashLink as NavLink} from "react-router-hash-link";
import {ReactElement} from "react";
import style from "./style.module.scss"
export interface ILink {
    title: string
    path: string
    icon?: ReactElement<SVGElement>
    nav: "link" | "nav",
    target?: "_blank"
}

const  LinkUI:React.FC<ILink> = ({title, nav, path, icon, target}) => {
    const match = useLocation()
    const active = ({ isActive }:any) => {
        if(isActive && match.pathname + match.hash === path) {
            return style.link + ' ' + style.active
        }
        else  {
            return style.link
        }
    }
    return (
        nav ? nav === "link" ?
        <Link className={style.link} to={path} target={target}>
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