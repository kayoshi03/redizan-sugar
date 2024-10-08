import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {photoServices} from "@/api/services/photo.services.ts";

export const getPhoto = createAsyncThunk(
    "get_photoMain",
    async () => {
        return photoServices.getMain()
    }
)

interface PhotoMainState {
    data: null | []
    status: "idle" | "loading" | "failed" | "succeeded"
    error: null | string | object | undefined
}

const initialState:PhotoMainState = {
    data: null,
    status: "idle",
    error: null
}

const photoMainSlice = createSlice({
    name: "photoMain",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPhoto.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getPhoto.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload.payload;
            })
            .addCase(getPhoto.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
})

export default photoMainSlice.reducer