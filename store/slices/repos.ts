import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseItem } from "@features/repos/api/getRecommendations";
import { HYDRATE } from "next-redux-wrapper";

export interface RepoState {
  reposCount: number;
  repos: ResponseItem[];
  error: string | null;
}

const initialState: RepoState = {
  reposCount: 0,
  repos: [],
  error: null,
};

export const repoSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    successGetRepos: (state: RepoState, action: PayloadAction<ResponseItem[]>) => {
      state.repos = action.payload;
      state.reposCount = 0;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log(action);
      return {
        ...state,
        ...action.payload.story,
      };
    },
  },
});

export const { successGetRepos } = repoSlice.actions;

export default repoSlice;
