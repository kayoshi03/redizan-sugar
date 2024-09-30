import style from "./style.module.scss"
import logotype from "@/assets/Logotype.png"
import {Link} from "react-router-dom";

const Logotype = () => {
    return (
        <Link
            to={"/"}
            className={style.logotype}
        >
            <p>САХАРНАЯ</p>
            <img width={50}
                src={logotype}
                alt={"Логотип Сахарная Вата"}/>
            <p className={style.red}>ВАТА</p>
        </Link>
    )
}

export default Logotype