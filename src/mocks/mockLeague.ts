import { League } from "../types/league.types.ts";

export const mockLeague: League = {
	id: 1,
	name: "Mock league",
	description: "Mock league description",
	ownerId: "123",
	members: [
		{
			id: "123",
			name: "Owner",
		},
		{
			id: "456",
			name: "Member 1",
		},
		{
			id: "789",
			name: "Member 2",
		},
	],
	teams: [
		{
			id: "123",
			name: "Team 1",
		},
		{
			id: "456",
			name: "Team 2",
		},
		{
			id: "789",
			name: "Team 3",
		},
	],
	matches: [
		{
			id: 1,
			homeTeamId: "123",
			awayTeamId: "456",
			date: new Date(),
			result: {
				home: 1,
				away: 2,
			},
		},
		{
			id: 2,
			homeTeamId: "456",
			awayTeamId: "123",
			date: new Date(),
			result: {
				home: 2,
				away: 1,
			},
		},
		{
			id: 3,
			homeTeamId: "789",
			awayTeamId: "123",
			date: new Date(),
			result: {
				home: 0,
				away: 0,
			},
		},
	],
};
