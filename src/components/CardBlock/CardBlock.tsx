import Card from "@/ui/Card/Card.tsx";
import Cards from "@/strings/cards/strings.tsx";
import style from "./style.module.scss"
const CardBlock = () => {
    return (
        <div className={style.cards}>
            <div className="container">
                <div className={style.wrapper}>
                    {
                        Cards.map((item) => (
                            <Card key={item.title} title={item.title} src={item.src}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CardBlock