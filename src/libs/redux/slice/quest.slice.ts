import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {QuestTypes} from "@/types/quest.types.ts";
import {RootState} from "@/libs/redux/store.ts";
import {questServices} from "@/api/services/quest.services.ts";

export const getQuests = createAsyncThunk(
    "get_quests",
    async () => {
        const res = questServices.getQuests()
        return res
    }
)

interface QuestState {
    data: QuestTypes[],
    status: "idle" | "loading" | "failed" | "succeeded",
    error: null | string | object | undefined
}

const initialState:QuestState = {
    data: [],
    status: "idle",
    error: null
}

export const QuestSlice = createSlice({
    name: "quests",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getQuests.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getQuests.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getQuests.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
})


export const Quests = (state:RootState) => state.quests.data

export default QuestSlice.reducer