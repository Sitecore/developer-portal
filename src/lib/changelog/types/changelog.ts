export type ChangelogCredentials = {
	preview: ChangelogEndpoint;
	production: ChangelogEndpoint;
};

export type ChangelogEndpoint = {
	endpoint: string;
	token: string;
};
