import { NextResponse } from 'next/server';

const roadmapAPI = 'https://sitecore.atlassian.net/rest/api/3/search?jql=project=SMAP AND cf[15180]="NOW"&fields=summary,status,customfield_15180&expand=names'; // Replace with your actual API endpoint

export default async function GET() {
  try {
    // Fetch data from the external API
    const response = await fetch(roadmapAPI, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${process.env.JIRA_USERNAME}:${process.env.JIRA_API_TOKEN}`).toString('base64')}`,
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch data from external API' }, { status: 500 });
    }

    const data = await response.json();

    // Return the fetched data as JSON
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch roadmap data' }, { status: 500 });
  }
}
