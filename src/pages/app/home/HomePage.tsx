import MainBlock from "@/components/MainBlock/MainBlock.tsx";
import WhatBlock from "@/components/WhatBlock/WhatBlock.tsx";
import CardBlock from "@/components/CardBlock/CardBlock.tsx";
import QuestBlock from "@/components/QuestBlock/QuestBlock.tsx";

export const HomePage = () => {
    return (
        <>
            <MainBlock/>
            <WhatBlock/>
            <CardBlock/>
            <QuestBlock/>
        </>
    )
}