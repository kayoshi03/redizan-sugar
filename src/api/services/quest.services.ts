import {query} from "@/api/interceptors.ts";

export class QuestServices {
    async getQuests() {
        const res = await query.get("/get_quests")
        return res.data.payload
    }
    async getQuest(slug:string) {
        const res = await query.get(`/get_quest/${slug}`)
        const quest = res.data.payload.quest
        const reviews = res.data.payload.reviews
        return {quest, reviews}
    }
}

export const questServices = new QuestServices()