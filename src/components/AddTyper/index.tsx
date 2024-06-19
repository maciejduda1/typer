import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Stack } from "@mui/material";
import SetupLeagueStep from "./AddLeagueWizzard/SetupLeagueStep";
import SetupTeamsStage from "./AddLeagueWizzard/SetupTeamsStage";
import SetupRulesStep from "./AddLeagueWizzard/SetupRulesStep";
import SetupStageStep from "./AddLeagueWizzard/SetupStageStep";
import { WizardSteps } from "../../types/wizzard.types.ts";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { selectAddLeagueStep } from "../../store/selectors/addLeague.selectors.ts";
const AddTyper: React.FC = () => {
	const step = useSelector(selectAddLeagueStep);

	const stepSwitch = () => {
		switch (step) {
			case WizardSteps.SETUP_LEAGUE_STEP:
				return <SetupLeagueStep />;
			case WizardSteps.SETUP_TEAMS_STEP:
				return <SetupTeamsStage />;
			case WizardSteps.SETUP_RULES_STEP:
				return <SetupRulesStep />;
			case WizardSteps.SETUP_STAGE_STEP:
				return <SetupStageStep />;
			default:
				return <Typography>Wizard Error</Typography>;
		}
	};

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Stack spacing={2}>
					<Card sx={{ padding: "2rem" }} elevation={2}>
						<CardContent>{stepSwitch()}</CardContent>
					</Card>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default AddTyper;
