import style from './style.module.scss'
import girl from "@/assets/girl.png"
import left from "@/assets/left.png"
import right from "@/assets/right.png"
import {Link} from "react-router-dom";
const MainBlock = () => {
    return(
        <div className={style.main}>
            <div className={style.text}>
                <div className={style.bold}>
                    <h2>СТРАШНЫЕ</h2>
                    <h3>КВЕСТЫ В</h3>
                    <h2 className={style.city}>ЧЕЛЯБИНСКЕ</h2>
                </div>
                <div className={style.regular}>
                    <p className={style.left}>Удовольствие во время процесса и</p>
                    <p className={style.right}>приятное <span className={style.red}>послевкусие</span> по <span
                        className={style.red}>завершению...</span></p>
                </div>
            </div>
            <div className={style.anc}>
                <Link className="btn" to={"/app/home/#quests"}>Выбрать квест</Link>
                <p>Хватает смелости? Жми!</p>
            </div>
            <img className={style.leftboy} src={left} alt={""}/>
            <img className={style.rightboy} src={right} alt={""}/>
            <img className={style.girl} src={girl} alt={""}/>
        </div>
    )
}

export default MainBlock