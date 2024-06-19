import React from "react";
import { Button, Grid } from "@mui/material";
import { translate } from "../../../../i18n.ts";
import { useDispatch } from "react-redux";
import { setStep } from "../../../../store/reducers/addLeague.reducer.ts";
import { WizardSteps } from "../../../../types/wizzard.types.ts";

const SetupTeamsStage: React.FC = () => {
	const dispatch = useDispatch();
	const nextStep = () => dispatch(setStep(WizardSteps.SETUP_TEAMS_STEP));
	const previousStep = () => dispatch(setStep(WizardSteps.SETUP_LEAGUE_STEP));

	return (
		<Grid container spacing={2}>
			<Grid item xs={6}>
				<Button variant={"outlined"} onClick={previousStep}>
					{translate("button.prev")}
				</Button>
			</Grid>
			<Grid item xs={6}>
				<Button disabled variant={"contained"} onClick={nextStep}>
					{translate("button.next")}
				</Button>
			</Grid>
		</Grid>
	);
};

export default SetupTeamsStage;
