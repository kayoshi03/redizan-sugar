import {configureStore} from "@reduxjs/toolkit";
import questSlice from "@/libs/redux/slice/quest.slice.ts";

export const store = configureStore({
    reducer: {
        quests: questSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch