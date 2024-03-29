import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import repoSlice from "@slices/repos";
import { recommendationsApi } from "@features/repos/api/getRecommendations";
import { repoInfoApi } from "@features/info/api/getRepoInfo";
import middlewares from "./middlewares";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () =>
  configureStore({
    reducer: {
      [repoSlice.name]: repoSlice.reducer,
      [recommendationsApi.reducerPath]: recommendationsApi.reducer,
      [repoInfoApi.reducerPath]: repoInfoApi.reducer,
    },
    // @ts-ignore
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
    devTools: process.env.NODE_ENV === "development",
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === "development",
});
export const store = makeStore();
