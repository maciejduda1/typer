import * as yup from "yup";

const setupLeagueStepFormValidator = yup.object().shape({
	leagueName: yup.string().required("required").min(3, "min 3 characters"),
	numberOfTeams: yup
		.number()
		.min(3, "min 3")
		.max(100, "max 100")
		.required("required"),
	password: yup.string().nullable().notRequired(),
	repeatPassword: yup.string().nullable().notRequired(),
});

export type SetupLeagueStepFormValuesType = yup.InferType<
	typeof setupLeagueStepFormValidator
>;
export default setupLeagueStepFormValidator;
