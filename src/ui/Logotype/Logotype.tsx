import style from "./style.module.scss"
import logotype from "@assets/Logotype.png"

const Logotype = () => {
    return (
        <div className={style.logotype}>
            <p>САХАРНАЯ</p>
            <img width={50} src={logotype} alt={"Логотип Сахарная Вата"}/>
            <p className={style.red}>ВАТА</p>
        </div>
    )
}

export default Logotype