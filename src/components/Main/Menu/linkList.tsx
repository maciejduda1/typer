import React from "react";
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

export interface Link {
	id: number;
	title: string;
	path: string;
	icon?: React.ReactNode;
}

const linkList: Link[] = [
	{
		id: 1,
		title: "list",
		path: "/",
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
];
export default linkList;
