import React from "react";
import { Grid } from "@mui/material";
import DashboardCard from "./DashboardCard";

const Dashboard: React.FC = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={6}>
				<DashboardCard />
			</Grid>
			<Grid item xs={6}>
				<DashboardCard />
			</Grid>
			<Grid item xs={6}>
				<DashboardCard />
			</Grid>
			<Grid item xs={6}>
				<DashboardCard />
			</Grid>
		</Grid>
	);
};

export default Dashboard;
