import {query} from "@/api/interceptors.ts";

export class PhotoServices {
    async getMain() {
        const res = await query.get("/get_photos?is_main=true")
        return res.data
    }
}

export const photoServices = new PhotoServices()