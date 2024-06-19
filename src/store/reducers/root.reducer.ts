import { combineReducers } from "@reduxjs/toolkit";
import libraryReducer from "./library.reducer";
import authReducer from "./auth.reducer";
import addLeagueReducer from "./addLeague.reducer";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
	library: libraryReducer,
	auth: authReducer,
	addLeague: addLeagueReducer,
});

export default rootReducer;
