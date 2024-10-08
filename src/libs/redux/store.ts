import {configureStore} from "@reduxjs/toolkit";
import questSlice from "@/libs/redux/slice/quest.slice.ts";
import photomainSlice from "@/libs/redux/slice/photomain.slice.ts";

export const store = configureStore({
    reducer: {
        quests: questSlice,
        photoMain: photomainSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch