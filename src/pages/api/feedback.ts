import type { NextApiRequest, NextApiResponse } from "next";
import { postJiraIssue } from "@src/lib/jira";

interface FeedbackBody {
	summary: string;
	description: string;
	name: string;
	email: string;
	url?: string;
	projectId: string;
	issueTypeId: string;
	product?: string[];
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== "POST") {
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		return res.status(405).send("Method not allowed");
	}
	//return res.status(500).send('Bad configuration');
	const body = JSON.parse(req.body) as FeedbackBody;

	try {
		await postJiraIssue({
			summary: body.summary,
			projectKey: body.projectId,
			name: body.name,
			email: body.email,
			description: body.description,
			url: body.url,
			issueTypeId: body.issueTypeId,
			product: body.product,
		});
	} catch (e) {
		console.error("error while creating the ticket", e);

		res.setHeader("Content-Type", "text/html; charset=utf-8");
		return res.status(500).send("Bad configuration");
	}

	res.status(200).json({
		message: "ticket created!",
	});
}
