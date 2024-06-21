import React from "react";
import { translate } from "../../../../i18n.ts";
import { Stack, Divider, Typography, Button } from "@mui/material";
import { Form, Formik, FormikProps } from "formik";
import { useDispatch } from "react-redux";
import {
	setLeagueSetup,
	setStep,
} from "../../../../store/reducers/addLeague.reducer.ts";
import { WizardSteps } from "../../../../types/wizzard.types.ts";
import setupLeagueStepFormValidator, {
	SetupLeagueStepFormValuesType,
} from "./setupLeagueStepForm.validator.ts";
import FormikTextField from "../../../Shared/FormikComponents/FormikTextField";

const SetupLeagueStep: React.FC = () => {
	const dispatch = useDispatch();
	const initialValues: SetupLeagueStepFormValuesType = {
		leagueName: "",
		numberOfTeams: 3,
		password: null,
		repeatPassword: null,
	};

	const submitForm = (values: SetupLeagueStepFormValuesType) => {
		dispatch(
			setLeagueSetup({
				name: values.leagueName,
				numberOfTeams: values.numberOfTeams,
				password: values.password || null,
			}),
		);
		dispatch(setStep(WizardSteps.SETUP_TEAMS_STEP));
	};

	return (
		<Stack spacing={2}>
			<Typography variant="h5">
				{translate("addLeague.steps.setupLeagueStep.title")}
			</Typography>
			<Divider>
				<Typography variant="h6">
					{translate(
						"addLeague.steps.setupLeagueStep.generalSectionTitle",
					)}
				</Typography>
			</Divider>
			<Formik
				initialValues={initialValues}
				onSubmit={submitForm}
				validationSchema={setupLeagueStepFormValidator}
			>
				{(props: FormikProps<SetupLeagueStepFormValuesType>) => (
					<Form>
						<Stack
							spacing={2}
							justifyItems={"center"}
							alignItems={"center"}
						>
							<FormikTextField
								required
								name={"leagueName"}
								label={
									"addLeague.steps.setupLeagueStep.leagueNameLabel"
								}
								variant="standard"
							/>
							<FormikTextField
								required
								name={"numberOfTeams"}
								InputProps={{
									inputProps: { min: 3, max: 100 },
								}}
								label={
									"addLeague.steps.setupLeagueStep.numberOfTeamsLabel"
								}
								type="number"
								variant="standard"
							/>
						</Stack>
						<Divider />
						<Typography textAlign={"center"} variant="subtitle1">
							{translate(
								"addLeague.steps.setupLeagueStep.passwordInfo",
							)}
						</Typography>
						<Stack
							spacing={2}
							justifyItems={"center"}
							alignItems={"center"}
						>
							<FormikTextField
								name={"password"}
								label={
									"addLeague.steps.setupLeagueStep.passwordLabel"
								}
								variant="standard"
							/>
							<FormikTextField
								name={"repeatPassword"}
								label={
									"addLeague.steps.setupLeagueStep.repeatPasswordLabel"
								}
								variant="standard"
							/>
						</Stack>
						<Divider />
						<Stack justifyContent={"center"} alignItems={"center"}>
							<Button
								disabled={!props.isValid}
								variant={"outlined"}
								onClick={props.submitForm}
							>
								{translate("button.next")}
							</Button>
						</Stack>
					</Form>
				)}
			</Formik>
		</Stack>
	);
};

export default SetupLeagueStep;
