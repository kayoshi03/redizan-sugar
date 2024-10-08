import style from "./style.module.scss"
import logotype from "@/assets/Logotype.png";
const Loading = () => {
    return (
        <div className={style.loading}>
            <div className={style.logotype}>
                <p>САХАРНАЯ</p>
                <img width={300}
                     src={logotype}
                     alt={"Логотип Сахарная Вата"}/>
                <p className={style.red}>ВАТА</p>
            </div>
        </div>
    )
}

export default Loading