import { filterResources } from '$lib/utils';
import db from '$lib/data.json';

export const prerender = false;

export async function load({ params, url }) {
	let resources: any[] = []
	db.levels.forEach((level) => {
		if (level.name == params.level) {
			level.subjects.forEach((subject) => {
				if (subject.name == params.subject) {
					resources = subject.resources;
				}
			});
		}
	});
	return {
		resources: filterResources(resources, url.searchParams.get('query') || ''),
		subject: params.subject,
		level: params.level
	};
}
