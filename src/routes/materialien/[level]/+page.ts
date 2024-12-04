import db from '$lib/data.json';

export async function load({ params, url }) {
    const subjects: any[] = [];
	db.levels.forEach((level: any) => {
		if (level.name == params.level) {
			level.subjects.forEach((subject: any) => {
				subjects.push(subject.name);
			});
		}
	});
    return { level: params.level, subjects: subjects };
}