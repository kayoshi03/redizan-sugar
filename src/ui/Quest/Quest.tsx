import style from "./style.module.scss"
import {QuestTypes} from "@/types/quest.types.ts";
import {getImage} from "@/const/image.ts";

type QuestProps = Pick<QuestTypes, "files" | "name" | "description" | "play_time" | "max_players" | "min_players" | "age_limit">
const Quest = ({files,name, description, play_time, max_players, min_players, age_limit}:QuestProps) => {

    return(
        <div className={style.quest}>
            <img width={400} height={240} src={getImage(files)} alt={""}/>
            <div className={style.text}>
                <h3>{name}</h3>
                <div className={style.options}>
                    <div className={style.type}>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                             width="20px" height="20px" viewBox="0 0 30.000000 30.000000"
                             preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
                                   fill="#fff" stroke="none">
                                    <path d="M108 253 c-9 -10 -19 -28 -22 -40 -4 -13 -11 -23 -16 -23 -5 0 -17
                                    -11 -26 -26 -16 -24 -16 -26 5 -40 11 -8 21 -21 21 -27 0 -15 64 -67 82 -67
                                    17 1 63 41 77 69 7 11 18 21 26 21 20 0 19 36 0 52 -28 23 -36 32 -55 66 -23
                                    37 -66 44 -92 15z m22 -48 c0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15
                                    10 15 6 0 10 -7 10 -15z m40 0 c0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5
                                    15 10 15 6 0 10 -7 10 -15z"/>
                                </g>
                        </svg>
                        <p>{description}</p>
                    </div>
                    <div className={style.tech}>
                        <svg width="20px" height="20px" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#000000" fillRule="evenodd"
                                  d="M207.960546,159.843246 L210.399107,161.251151 C210.637153,161.388586 210.71416,161.70086 210.580127,161.933013 C210.442056,162.172159 210.144067,162.258604 209.899107,162.117176 L207.419233,160.68542 C207.165323,160.8826 206.846372,161 206.5,161 C205.671573,161 205,160.328427 205,159.5 C205,158.846891 205.417404,158.291271 206,158.085353 L206,153.503423 C206,153.22539 206.231934,153 206.5,153 C206.776142,153 207,153.232903 207,153.503423 L207,158.085353 C207.582596,158.291271 208,158.846891 208,159.5 C208,159.6181 207.986351,159.733013 207.960546,159.843246 Z M206.5,169 C211.746705,169 216,164.746705 216,159.5 C216,154.253295 211.746705,150 206.5,150 C201.253295,150 197,154.253295 197,159.5 C197,164.746705 201.253295,169 206.5,169 Z"
                                  transform="translate(-197 -150)"/>
                        </svg>
                        <p>{play_time}</p>
                        <svg fill="#8F111C" width="20px" height="20px" viewBox="-3 0 20 20"
                             xmlns="http://www.w3.org/2000/svg" className="cf-icon-svg">
                            <path
                                d="M12.517 12.834v1.9a1.27 1.27 0 0 1-1.267 1.267h-9.5a1.27 1.27 0 0 1-1.267-1.267v-1.9A3.176 3.176 0 0 1 3.65 9.667h5.7a3.176 3.176 0 0 1 3.167 3.167zM3.264 5.48A3.236 3.236 0 1 1 6.5 8.717a3.236 3.236 0 0 1-3.236-3.236z"/>
                        </svg>
                        <p>{min_players}-{max_players}</p>
                        <p>+{age_limit}</p>
                    </div>
                </div>
                <button>
                    Забронировать
                </button>
            </div>
        </div>
    )
}

export default Quest