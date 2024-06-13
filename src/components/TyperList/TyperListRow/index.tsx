import React from "react";
import { TableCell, TableRow } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

//Todo - add row type
interface ITyperListRowProps {
	row: any;
}
const TyperListRow: React.FC<ITyperListRowProps> = ({ row }) => {
	const navigate = useNavigate();
	const deleteRow = () => {
		//Todo - delete row
	};

	const showDetails = () => navigate(`${row.calories}`);

	return (
		<TableRow key={row.name}>
			<TableCell component="th" scope="row">
				{row.name}
			</TableCell>
			<TableCell align="right">
				{/*Liczba uczestników*/}
				{row.calories}
			</TableCell>
			<TableCell align="right">
				<IconButton aria-label="delete">
					<DeleteIcon />
				</IconButton>
				<IconButton onClick={showDetails} aria-label="delete">
					<LoginIcon />
				</IconButton>
			</TableCell>
		</TableRow>
	);
};

export default TyperListRow;
