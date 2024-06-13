import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ListAltIcon from "@mui/icons-material/ListAlt";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import DashboardIcon from "@mui/icons-material/Dashboard";

export interface Link {
	id: number;
	title: string;
	path: string;
	icon?: React.ReactNode;
}

const linkList: Link[] = [
	{
		id: 0,
		title: "dashboard",
		path: "/",
		icon: <DashboardIcon />,
	},
	{
		id: 1,
		title: "list",
		path: "list",
		icon: <ListAltIcon />,
	},
	{
		id: 2,
		title: "join",
		path: "/join",
		icon: <EditCalendarIcon />,
	},
	{
		id: 3,
		title: "create",
		path: "/create",
		icon: <AddIcon />,
	},
	{
		id: 4,
		title: "account",
		path: "/account",
		icon: <PermIdentityIcon />,
	},
];
export default linkList;
