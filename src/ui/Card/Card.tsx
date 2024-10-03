import style from "./style.module.scss"

export interface ICard {
    title: string
    src: string | undefined
}
const Card = ({title, src}:ICard) => {
    return(
        <div className={style.card}>
            <img width={200} height={150} src={src} alt={""}/>
            <p>{title}</p>
        </div>
    )
}

export default Card