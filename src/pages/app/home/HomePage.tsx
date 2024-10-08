import MainBlock from "@/components/MainBlock/MainBlock.tsx";
import WhatBlock from "@/components/WhatBlock/WhatBlock.tsx";
import CardBlock from "@/components/CardBlock/CardBlock.tsx";
import QuestBlock from "@/components/QuestBlock/QuestBlock.tsx";
import ReviewsBlock from "@/components/ReviewsBlock/ReviewsBlock.tsx";
import GalleryBlock from "@/components/GalleryBlock/GalleryBlock.tsx";
import MapBlock from "@/components/MapBlock/MapBlock.tsx";

export const HomePage = () => {
    return (
        <>
            <MainBlock/>
            <WhatBlock/>
            <CardBlock/>
            <QuestBlock/>
            <ReviewsBlock/>
            <GalleryBlock/>
            <MapBlock/>
        </>
    )
}