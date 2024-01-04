import { db } from '$lib/server/mem';

export function load() {
	return {
		subjects: db.subjects
	};
}
