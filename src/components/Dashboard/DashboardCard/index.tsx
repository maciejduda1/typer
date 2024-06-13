import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { translate } from "../../../i18n.ts";
import { useNavigate } from "react-router-dom";

interface IDashboardCardProps {
	image: string;
	translationKey: string;
}
const DashboardCard: React.FC<IDashboardCardProps> = ({
	image,
	translationKey,
}) => {
	const navigate = useNavigate();
	const handleClick = () => navigate(`${translationKey}`);

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea onClick={handleClick}>
				<CardMedia
					sx={{ height: 240, backgroundSize: "100% 100%" }}
					image={image}
					title={translationKey}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{translate(`dashboard.card.title.${translationKey}`)}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{translate(
							`dashboard.card.description.${translationKey}`,
						)}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default DashboardCard;
