import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import Background from "../../assets/images/eagle.png";

const Auth: React.FC = () => {
	return (
		<Container
			style={{
				minWidth: "100vw",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				backgroundImage: `url(${Background})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "100% 100%",
			}}
		>
			<Typography
				color={"white"}
				mt={8}
				textAlign={"center"}
				variant={"h2"}
			>
				Typer Creator by Maciej Duda
			</Typography>
			<Box
				display="flex"
				flexGrow="1"
				justifyContent="center"
				alignItems="center"
			>
				<Outlet />
			</Box>
		</Container>
	);
};
export default Auth;
