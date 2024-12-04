import { resourcesBySubjectAndGradeMap } from '$lib/utils';
import db from '$lib/data.json';

export const prerender = false;

export async function load({ params, url }) {
	return {
		resources: resourcesBySubjectAndGradeMap(
			db,
			params.subject,
			url.searchParams.get('query') || ''
		),
		subject: params.subject
	};
}
