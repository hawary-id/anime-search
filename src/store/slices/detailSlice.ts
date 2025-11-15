import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/services/api";

interface AnimeDetail {
    mal_id: number;
    title: string;
    synopsis: string;
    images: {
        jpg: {
            large_image_url: string;
        };
    };
    score: number;
    rank: number;
    episodes: number;
    status: string;
    rating: string;
    year: number;
}

export interface DetailState {
    data: AnimeDetail | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: DetailState = {
    data: null,
    isLoading: false,
    error: null,
};

export const fetchAnimeDetail = createAsyncThunk(
    "detail/fetchAnimeDetail",
    async (id: string, { rejectWithValue }) => {
        try {
            const res = await api.get(`/anime/${id}`);
            return res.data.data;
        } catch (err: any) {
            if (err.name === "CanceledError" || err.code === "ERR_CANCELED") {
                return rejectWithValue(null);
            }
            return rejectWithValue(err.response?.data?.message || err.message || "Unknown error");
        }


    }
);

const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {
        clearDetail(state) {
            state.data = null;
            state.isLoading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAnimeDetail.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchAnimeDetail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchAnimeDetail.rejected, (state, action: any) => {
                state.isLoading = false;
                if (action.payload === null) {
                    state.error = null;
                    return;
                }
                state.error = action.payload;
            });

    },
});

export const { clearDetail } = detailSlice.actions;
export default detailSlice.reducer;
