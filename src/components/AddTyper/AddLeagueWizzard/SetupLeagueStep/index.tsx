import React from "react";
import { translate } from "../../../../i18n.ts";
import {
	Stack,
	Divider,
	Typography,
	Button,
	Checkbox,
	FormControlLabel,
} from "@mui/material";
import { Form, Formik, FormikProps } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
	setLeagueSetup,
	setStep,
} from "../../../../store/reducers/addLeague.reducer.ts";
import { WizardSteps } from "../../../../types/wizzard.types.ts";
import setupLeagueStepFormValidator, {
	SetupLeagueStepFormValuesType,
} from "./setupLeagueStepForm.validator.ts";
import FormikTextField from "../../../Shared/FormikComponents/FormikTextField";
import { selectAddLeagueSetup } from "../../../../store/selectors/addLeague.selectors.ts";
const SetupLeagueStep: React.FC = () => {
	const dispatch = useDispatch();
	const storeValues = useSelector(selectAddLeagueSetup);
	const initialValues: SetupLeagueStepFormValuesType = Object.assign(
		{},
		{
			leagueName: "",
			numberOfTeams: 3,
			private: false,
			password: undefined,
			repeatPassword: undefined,
		},
		storeValues,
	);

	const submitForm = (values: SetupLeagueStepFormValuesType) => {
		dispatch(
			setLeagueSetup({
				leagueName: values.leagueName,
				numberOfTeams: values.numberOfTeams,
				private: values.private,
				password: values.password,
				repeatPassword: values.repeatPassword,
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
						<FormControlLabel
							control={
								<Checkbox
									name={"private"}
									onChange={props.handleChange}
									checked={props.values.private}
									color="secondary"
									size={"large"}
								/>
							}
							label={translate(
								"addLeague.steps.setupLeagueStep.passwordInfo",
							)}
						/>
						{props.values.private && (
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
									type="password"
									variant="standard"
								/>
								<FormikTextField
									name={"repeatPassword"}
									label={
										"addLeague.steps.setupLeagueStep.repeatPasswordLabel"
									}
									type="password"
									variant="standard"
								/>
							</Stack>
						)}
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
