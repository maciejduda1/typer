import React from "react";
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableFooter,
	TableHead,
	TableRow,
} from "@mui/material";
import Pagination from "../Shared/Pagination";
import TyperListRow from "./TyperListRow";

function createData(name: string, calories: number, fat: number) {
	return { name, calories, fat };
}

const rows = [
	createData("Cupcake", 305, 3.7),
	createData("Donut", 452, 25.0),
	createData("Eclair", 262, 16.0),
	createData("Frozen yoghurt", 159, 6.0),
	createData("Gingerbread", 356, 16.0),
	createData("Honeycomb", 408, 3.2),
	createData("Ice cream sandwich", 237, 9.0),
	createData("Jelly Bean", 375, 0.0),
	createData("KitKat", 518, 26.0),
	createData("Lollipop", 392, 0.2),
	createData("Marshmallow", 318, 0),
	createData("Nougat", 360, 19.0),
	createData("Oreo", 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));
const TyperList: React.FC = () => {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell align="right">Liczba Graczy</TableCell>
						<TableCell align="right">Akcje</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{(rowsPerPage > 0
						? rows.slice(
								page * rowsPerPage,
								page * rowsPerPage + rowsPerPage,
							)
						: rows
					).map((row) => (
						<TyperListRow row={row} />
					))}
					{emptyRows > 0 && (
						<TableRow style={{ height: 53 * emptyRows }}>
							<TableCell colSpan={6} />
						</TableRow>
					)}
				</TableBody>
				<TableFooter>
					<TableRow>
						<Pagination
							page={page}
							setPage={setPage}
							setRowsPerPage={setRowsPerPage}
							rowsPerPage={rowsPerPage}
							rows={rows}
						/>
					</TableRow>
				</TableFooter>
			</Table>
		</TableContainer>
	);
};

export default TyperList;
