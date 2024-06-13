import React from "react";
import { Grid } from "@mui/material";
import DashboardCard from "./DashboardCard";
import Goal from "../../assets/images/goal.png";
import Join from "../../assets/images/join.png";
import Create from "../../assets/images/create.png";
import Profile from "../../assets/images/profile.png";

const Dashboard: React.FC = () => {
	return (
		<Grid container spacing={8}>
			<Grid item xs={6}>
				<DashboardCard image={Goal} translationKey={"list"} />
			</Grid>
			<Grid item xs={6}>
				<DashboardCard image={Join} translationKey={"join"} />
			</Grid>
			<Grid item xs={6}>
				<DashboardCard image={Create} translationKey={"create"} />
			</Grid>
			<Grid item xs={6}>
				<DashboardCard image={Profile} translationKey={"account"} />
			</Grid>
		</Grid>
	);
};

export default Dashboard;
