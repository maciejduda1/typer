import React from "react";
import { translate } from "../../../../i18n.ts";
import { Stack, Divider, Typography, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
	setLeagueSetup,
	setStep,
} from "../../../../store/reducers/addLeague.reducer.ts";
import { WizardSteps } from "../../../../types/wizzard.types.ts";
import setupLeagueStepFormValidator, {
	SetupLeagueStepFormValuesType,
} from "./setupLeagueStepForm.validator.ts";

const SetupLeagueStep: React.FC = () => {
	const dispatch = useDispatch();
	const formik = useFormik<SetupLeagueStepFormValuesType>({
		initialValues: {
			leagueName: "",
			numberOfTeams: 3,
			password: null,
			repeatPassword: null,
		},
		validationSchema: setupLeagueStepFormValidator,
		onSubmit: (values) => {
			dispatch(
				setLeagueSetup({
					name: values.leagueName,
					numberOfTeams: values.numberOfTeams,
					password: values.password || null,
				}),
			);
			dispatch(setStep(WizardSteps.SETUP_TEAMS_STEP));
		},
	});

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
			<Stack spacing={2} justifyItems={"center"} alignItems={"center"}>
				<TextField
					error={!!formik.errors.leagueName}
					required
					value={formik.values.leagueName}
					onChange={formik.handleChange}
					name={"leagueName"}
					label={translate(
						"addLeague.steps.setupLeagueStep.leagueNameLabel",
					)}
					helperText={
						formik.errors.leagueName
							? translate(`errors.${formik.errors.leagueName}`)
							: null
					}
					variant="standard"
				/>
				<TextField
					error={!!formik.errors.numberOfTeams}
					required
					value={formik.values.numberOfTeams}
					onChange={formik.handleChange}
					name={"numberOfTeams"}
					InputProps={{ inputProps: { min: 3, max: 100 } }}
					label={translate(
						"addLeague.steps.setupLeagueStep.numberOfTeamsLabel",
					)}
					helperText={
						formik.errors.numberOfTeams
							? translate(`errors.${formik.errors.numberOfTeams}`)
							: ""
					}
					type="number"
					variant="standard"
				/>
			</Stack>
			<Divider />
			<Typography textAlign={"center"} variant="subtitle1">
				{translate("addLeague.steps.setupLeagueStep.passwordInfo")}
			</Typography>
			<Stack spacing={2} justifyItems={"center"} alignItems={"center"}>
				<TextField
					value={formik.values.password}
					onChange={formik.handleChange}
					name={"password"}
					label={translate(
						"addLeague.steps.setupLeagueStep.passwordLabel",
					)}
					variant="standard"
				/>
				<TextField
					value={formik.values.repeatPassword}
					onChange={formik.handleChange}
					name={"repeatPassword"}
					label={translate(
						"addLeague.steps.setupLeagueStep.repeatPasswordLabel",
					)}
					variant="standard"
				/>
			</Stack>
			<Divider />
			<Stack justifyContent={"center"} alignItems={"center"}>
				<Button
					disabled={!formik.isValid}
					variant={"outlined"}
					onClick={formik.submitForm}
				>
					{translate("button.next")}
				</Button>
			</Stack>
		</Stack>
	);
};

export default SetupLeagueStep;
