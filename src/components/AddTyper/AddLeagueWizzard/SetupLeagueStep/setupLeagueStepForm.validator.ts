import * as yup from "yup";

const setupLeagueStepFormValidator = yup.object({
	leagueName: yup.string().required("required").min(3, "min 3 characters"),
	numberOfTeams: yup
		.number()
		.min(3, "min 3")
		.max(100, "max 100")
		.required("required"),
	private: yup.boolean().required("required"),
	password: yup.string().when("private", {
		is: true,
		then: (schema) =>
			schema.min(5, "min 5 characters").required("required"),
		otherwise: (schema) => schema.nullable(),
	}),
	repeatPassword: yup.string().when("private", {
		is: true,
		then: (schema) =>
			schema
				.oneOf([yup.ref("password")], "passwords must match")
				.required("required"),
		otherwise: (schema) => schema.nullable(),
	}),
});

export type SetupLeagueStepFormValuesType = yup.InferType<
	typeof setupLeagueStepFormValidator
>;
export default setupLeagueStepFormValidator;
