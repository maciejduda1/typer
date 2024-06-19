import React from "react";
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Card,
	Box,
	Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { translate } from "../../../i18n.ts";
import CardContent from "@mui/material/CardContent";
import { Team } from "../../../types/league.types.ts";
import Modal from "../../Shared/Modal";

//TODO add MAP
const TeamTable: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const [teams, setTeams] = React.useState<Map<string, Team>>(new Map());

	const addTeam = (team: Team) => {
		setTeams((t) => new Map(t.set(team.id, team)));
	};

	const removeTeam = (id: string) => {
		setTeams((t) => {
			t.delete(id);
			return new Map(t);
		});
	};

	return (
		<Box>
			<Box my={2} display={"flex"} justifyContent={"flex-end"}>
				<Button
					onClick={() => setIsModalOpen(true)}
					variant="contained"
					color="primary"
					startIcon={<AddIcon />}
				>
					{translate("addLeague.addTeam")}
				</Button>
			</Box>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 500 }} aria-label="league teams table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="right">Liczba Graczy</TableCell>
							<TableCell align="right">Akcje</TableCell>
						</TableRow>
					</TableHead>
					<TableBody></TableBody>
				</Table>
			</TableContainer>

			<Modal
				isOpen={isModalOpen}
				handleClose={() => setIsModalOpen(false)}
			>
				TEST
			</Modal>
		</Box>
	);
};

export default TeamTable;
