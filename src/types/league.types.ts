export type League = {
	id: number;
	name: string;
	description: string;
	ownerId: string;
	members: Member[];
	teams: Team[];
	matches: Match[];
	// rules: Rules;
};

export type Match = {
	id: number;
	homeTeamId: string;
	awayTeamId: string;
	date: Date;
	result: Result;
};

export type Result = {
	home: number;
	away: number;
};

export type Team = {
	id: string;
	name: string;
};

export type Member = {
	id: string;
	name: string;
};

export type Rules = {
	numberOfPlayers: number;
	pointsPerWin: number;
	pointsPerDraw: number;
	pointsPerLoss: number;
	pointsPerExactScore: number;
	stages: Stage[];
};

export type Stage = {
	name: string;
	matches: Match[];
};
