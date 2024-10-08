import style from "./style.module.scss"
import {useAppSelector} from "@/hooks/redux.hooks.ts";
import Quest from "@/ui/Quest/Quest.tsx";

const QuestBlock = () => {
    const quests = useAppSelector(state => state.quests.data)
    return (
        <div id="quests"  className={style.quest}>
            <div className="container">
                <div className={style.wrapper}>
                    <h2 className="title">
                        НАШИ <span className="red">КВЕСТЫ</span>
                    </h2>
                    <div className={style.list}>
                        {
                            quests.map((item) => (
                                item.is_hide ?
                                    <></>
                                    :
                                   <Quest
                                       key={item.id}
                                       name={item.name}
                                       description={item.description}
                                       files={item.files}
                                       min_players={item.min_players}
                                       max_players={item.max_players}
                                       play_time={item.play_time}
                                       age_limit={item.age_limit}
                                       slug={item.slug}/>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestBlock