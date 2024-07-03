import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WizardSteps } from "../../types/wizzard.types.ts";
import { SetupLeagueStepFormValuesType } from "../../components/AddTyper/AddLeagueWizzard/SetupLeagueStep/setupLeagueStepForm.validator.ts";

export interface IAddLeagueState {
	step: WizardSteps;
	leagueSetup: SetupLeagueStepFormValuesType;
}

const initialState: IAddLeagueState = {
	step: WizardSteps.SETUP_LEAGUE_STEP,
	leagueSetup: {
		leagueName: "",
		numberOfTeams: 3,
		private: false,
		password: undefined,
		repeatPassword: undefined,
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
