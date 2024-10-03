import dice from "@/assets/dice.png"
import thunder from "@/assets/thunderbolt.png"
import rings from "@/assets/rings.png"
import hands from "@/assets/hands.png"
import gift from "@/assets/gift.png"
import {ICard} from "@/ui/Card/Card.tsx";

const Cards:ICard[] = [
    {
        title: "Отличный вид отдыха, помогает лучше психолога",
        src: dice
    },
    {
        title: "Сплочает коллектив",
        src: hands
    },
    {
        title: "Удивляет друзей, приятелей и родственников",
        src: gift
    },
    {
        title: "Заряжает энергией и адреналином",
        src: thunder
    },
    {
        title: "Уникальная возможность признаться в чувствах второй половине",
        src: rings
    },
]

export default Cards