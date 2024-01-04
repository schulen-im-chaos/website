import { resourcesBySubjectAndGradeMap } from '$lib/server/mem';

export function load({ params, url }) {
	return {
		resources: resourcesBySubjectAndGradeMap(params.subject, url.searchParams.get('query') || ''),
		subject: params.subject
	};
}
