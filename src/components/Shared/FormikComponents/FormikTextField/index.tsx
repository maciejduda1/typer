import React from "react";
import { useField } from "formik";
import { TextField, TextFieldProps } from "@mui/material";
import { translate } from "../../../../i18n.ts";

type FormikTextFieldProps = {
	name: string;
	label: string;
} & TextFieldProps;

const FormikTextField: React.FC<FormikTextFieldProps> = ({
	name,
	label,
	...props
}) => {
	const [field, meta] = useField(name);

	return (
		<TextField
			{...field}
			{...props}
			label={translate(label)}
			error={meta.touched && !!meta.error}
			helperText={
				meta.touched && meta.error
					? translate(`errors.${meta.error}`)
					: " "
			}
		/>
	);
};

export default FormikTextField;
