import React from "react";
import { TablePagination } from "@mui/material";
import TablePaginationActions from "./TablePaginationActions";

interface IPaginationProps {
	rows: unknown[];
	rowsPerPage: number;
	setRowsPerPage: (value: number) => void;
	setPage: (value: number) => void;
	page: number;
}
const Pagination: React.FC<IPaginationProps> = ({
	rows,
	rowsPerPage,
	setRowsPerPage,
	setPage,
	page,
}) => {
	const handleChangePage = (
		event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number,
	) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<TablePagination
			rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
			colSpan={3}
			count={rows.length}
			rowsPerPage={rowsPerPage}
			page={page}
			slotProps={{
				select: {
					inputProps: {
						"aria-label": "rows per page",
					},
					native: true,
				},
			}}
			onPageChange={handleChangePage}
			onRowsPerPageChange={handleChangeRowsPerPage}
			ActionsComponent={TablePaginationActions}
		/>
	);
};

export default Pagination;
