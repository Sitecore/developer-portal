const publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL
	? process.env.NEXT_PUBLIC_PUBLIC_URL
	: "http://localhost:3000";

export const replaceOutgoingLinks = (htmlString: string) => {
	// Regular expression to match URLs starting with 'https://scdp.blob.core.windows.net/downloads/'
	const regex = /https:\/\/scdp\.blob\.core\.windows\.net\/downloads\/[^\s"]+/g;

	return htmlString.replace(regex, (match) => {
		const baseUrl = "https://scdp.blob.core.windows.net/downloads/";
		const filePath = match.replace(baseUrl, "");
		return `${publicUrl}/api/download?file=${filePath}`;
	});
};
