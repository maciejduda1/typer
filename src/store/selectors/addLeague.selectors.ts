import { RootState } from "../reducers/root.reducer.ts";
import { createSelector } from "@reduxjs/toolkit";

export const selectAddLeague = createSelector(
	(state: RootState) => state.addLeague,
	(addLeague) => addLeague,
);

export const selectAddLeagueStep = createSelector(
	selectAddLeague,
	(addLeague) => addLeague.step,
);

export const selectAddLeagueSetup = createSelector(
	selectAddLeague,
	(addLeague) => addLeague.leagueSetup,
);
