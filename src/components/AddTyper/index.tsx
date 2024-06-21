import React from "react";
import CardContent from "@mui/material/CardContent";
import { Grid, Card, Stack, Box, Paper } from "@mui/material";
import SetupLeagueStep from "./AddLeagueWizzard/SetupLeagueStep";
import SetupTeamsStage from "./AddLeagueWizzard/SetupTeamsStage";
import SetupRulesStep from "./AddLeagueWizzard/SetupRulesStep";
import SetupStageStep from "./AddLeagueWizzard/SetupStageStep";
import { WizardSteps } from "../../types/wizzard.types.ts";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { selectAddLeagueStep } from "../../store/selectors/addLeague.selectors.ts";
import { styled } from "@mui/material/styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const WizardContainer = styled(Paper)(() => ({
	position: "relative",
	overflow: "hidden",
	width: "100%",
	height: 700,
}));

const StepContainer = styled(Box)(({ theme }) => ({
	position: "absolute",
	width: "100%",
	height: "100%",
	transition: "all 0.5s linear",
	padding: theme.spacing(2),

	"&.step-enter": {
		transform: "translateX(100%)",
		opacity: 0,
	},
	"&.step-enter-active": {
		transform: "translateX(0%)",
		opacity: 1,
	},
	"&.step-exit": {
		transform: "translateX(0%)",
		opacity: 1,
	},
	"&.step-exit-active": {
		transform: "translateX(-100%)",
		opacity: 0,
	},
}));

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
					<WizardContainer elevation={0}>
						<TransitionGroup>
							<CSSTransition
								key={step}
								timeout={500}
								classNames="step"
							>
								<StepContainer>
									<Card
										elevation={2}
										sx={{ padding: "2rem" }}
									>
										<CardContent>
											{stepSwitch()}
										</CardContent>
									</Card>
								</StepContainer>
							</CSSTransition>
						</TransitionGroup>
					</WizardContainer>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default AddTyper;
