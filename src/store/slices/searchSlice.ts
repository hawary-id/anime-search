import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/services/api";

interface Anime {
    mal_id: number;
    title: string;
    year?: number;
    score?: number;
    images: {
        jpg: {
            image_url: string;
        };
    };
}


export interface SearchState {
    query: string;
    results: Anime[];
    page: number;
    lastPage: number;
    isLoading: boolean;
    error: string | null;
}

const initialState: SearchState = {
    query: "",
    results: [],
    page: 1,
    lastPage: 1,
    isLoading: false,
    error: null,
};


export const fetchAnime = createAsyncThunk(
    "search/fetchAnime",
    async (
        { query, page }: { query: string; page: number },
        { rejectWithValue }
    ) => {
        try {
            const res = await api.get("/anime", {
                params: {
                    q: query,
                    page,
                },
            });

            return res.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.message || "Error");
        }
    }
);

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setQuery(state, action) {
            state.query = action.payload;
            state.page = 1;
        },
        setPage(state, action) {
            state.page = action.payload;
        },
        clearResults(state) {
            state.results = [];
            state.lastPage = 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAnime.pending, (state) => {
                state.isLoading = true;
                state.error = null;
                state.results = [];
            })
            .addCase(fetchAnime.fulfilled, (state, action: any) => {
                state.isLoading = false;

                state.results = action.payload.data;
                state.lastPage = action.payload.pagination.last_visible_page;
            })
            .addCase(fetchAnime.rejected, (state, action: any) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { setQuery, setPage, clearResults } = searchSlice.actions;
export default searchSlice.reducer;
