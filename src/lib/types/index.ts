export type NewsArticle = {
	author: string;
	content: string;
	description: string;
	publishedAt: string;
	source: {
		id: string;
		name: string;
	};
	title: string;
	url: string;
	urlToImage: string;
};

export type TheNewsArticle = {
	categories: string[];
	description: string;
	published_at: string;
	source: string;
	snippet: string;
	title: string;
	url: string;
	image_url: string;
	keywords: string;
	language: string;
	locale: string;
	relevance_score: number;
	uuid: string;
};
