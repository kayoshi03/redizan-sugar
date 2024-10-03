import style from "./style.module.scss"
import image from "@/assets/what.jpg"
import {WhatQuest} from "@/strings/whatQuest/strings.tsx";
const WhatBlock = () => {
    return (
        <div className={style.what}>
            <div className={style.card}>
                <div className={style.text}>
                    <h2>
                        {
                            WhatQuest.h2
                        }
                    </h2>
                    <p>
                        {
                            WhatQuest.p
                        }
                    </p>
                </div>
                <img width={640} height={360} src={image} alt={""}/>
            </div>
        </div>
    )
}

export default WhatBlock