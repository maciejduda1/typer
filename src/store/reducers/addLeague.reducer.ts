import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WizardSteps } from "../../types/wizzard.types.ts";

export interface IAddLeagueState {
	step: WizardSteps;
	leagueSetup: {
		name: string;
		numberOfTeams: number;
		password: string | null;
	};
}

const initialState: IAddLeagueState = {
	step: WizardSteps.SETUP_LEAGUE_STEP,
	leagueSetup: {
		name: "",
		numberOfTeams: 0,
		password: null,
	},
};

const addLeagueReducer = createSlice({
	initialState,
	name: "addLeague",
	reducers: {
		setStep(state, action: PayloadAction<WizardSteps>) {
			return {
				...state,
				step: action.payload,
			};
		},
		setLeagueSetup(
			state,
			action: PayloadAction<IAddLeagueState["leagueSetup"]>,
		) {
			return {
				...state,
				leagueSetup: action.payload,
			};
		},
	},
});

export const { setStep, setLeagueSetup } = addLeagueReducer.actions;
export default addLeagueReducer.reducer;
