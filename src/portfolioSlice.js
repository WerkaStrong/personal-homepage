import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        repos: [],
        status: "loading",
    },
    reducers: {
        fetchRepos: () => {},
        setRepos: (state, { payload: repos }) => {
            state.repos = repos;
        },
        setStatus: (state, { payload: status }) => {
            state.status = status;
        },
    },
});

export const { setRepos, setStatus, fetchRepos } = portfolioSlice.actions;

export const selectPortfolioState = (state) => state.portfolio;
export const selectStatus = (state) =>
    state.portfolio ? state.portfolio.status : "loading";

export const selectRepos = (state) => selectPortfolioState(state).repos;
export default portfolioSlice.reducer;
