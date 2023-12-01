import {api} from "src/services";
import {PALETTE} from "src/styles";
import {CheckCircle} from "src/svg";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {thunkBadRequest} from "../../thunk.bad-request";
import {PREFIX, buildExploreQuery, sanitizeSearches} from "./helper";
import {List, RootState, SearchModel, ExploreFilter} from "src/interfaces";
import {
  showAlert,
  closeSheet,
  closeDialog,
  closeSideMenu,
  showScreenLoader,
  toggleButtonLoader,
  SEARCH_FILTER_LOADER,
} from "../";

export const getExplore = createAsyncThunk(
  `${PREFIX}/get/explore`,
  async (_, thunkAPI): Promise<List<SearchModel[]> | undefined> => {
    const {auth} = thunkAPI.getState() as RootState;
    const {user} = auth;

    try {
      let searches = await api.Get<List<SearchModel[]>>("/searches");
      searches["data"] = sanitizeSearches(searches["data"], user["id"]);
      return searches;
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const getSearches = createAsyncThunk(
  `${PREFIX}/get/searches`,
  async (
    _,
    thunkAPI
  ): Promise<
    {searches: List<SearchModel[]>; filtersApplied: ExploreFilter} | undefined
  > => {
    thunkAPI.dispatch(toggleButtonLoader(SEARCH_FILTER_LOADER));
    const {auth, search, sideMenu} = thunkAPI.getState() as RootState;
    const {user} = auth;
    const {buildingFilters} = search;
    const query = buildExploreQuery(buildingFilters, user);

    try {
      let searches = await api.Get<List<SearchModel[]>>(`/searches${query}`);
      searches["data"] = sanitizeSearches(searches["data"], user["id"]);
      if (sideMenu["show"]) thunkAPI.dispatch(closeSideMenu());
      return {searches, filtersApplied: buildingFilters};
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(toggleButtonLoader(SEARCH_FILTER_LOADER));
    }
  }
);

export const getMyAlerts = createAsyncThunk(
  `${PREFIX}/get/my/alerts`,
  async (_, thunkAPI): Promise<List<SearchModel[]> | undefined> => {
    const {user} = (thunkAPI.getState() as RootState).auth;
    const {id} = user["preferences"]["search_alert"];
    try {
      let alerts = await api.Get<List<SearchModel[]>>(
        `/searches?categories=${id}`
      );
      alerts["data"] = sanitizeSearches(alerts["data"], user["id"]);
      return alerts;
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const getSearch = createAsyncThunk(
  `${PREFIX}/get/search`,
  async (searchId: string, thunkAPI): Promise<SearchModel | undefined> => {
    try {
      return await api.Get<SearchModel>(`/searches/${searchId}`);
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    }
  }
);

export const cancelSearch = createAsyncThunk(
  `${PREFIX}/cancel/search`,
  async (searchId: string, thunkAPI): Promise<void> => {
    thunkAPI.dispatch(showScreenLoader({show: true}));
    try {
      await api.Post<SearchModel>(`/searches/cancel/${searchId}`);
      thunkAPI.dispatch(closeDialog());
      thunkAPI.dispatch(closeSheet());
      thunkAPI.dispatch(
        showAlert({
          type: "success",
          icon: <CheckCircle color={PALETTE["WHITE"]} />,
          message: "your_search_has_been_canceled",
        })
      );
    } catch (error) {
      thunkBadRequest(error, thunkAPI);
    } finally {
      thunkAPI.dispatch(showScreenLoader({show: false}));
    }
  }
);
