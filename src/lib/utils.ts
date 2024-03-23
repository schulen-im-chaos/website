import type { Database, Resource } from './init';

// links
export const DiscordURL = 'https://discord.com/invite/nWd8yZ4HWY';
export const InstagramURL = 'https://www.instagram.com/schulenimchaos/';
export const GithubURL = 'https://github.com/schulen-im-chaos';

// helper sorting function
export function resourcesBySubjectAndGradeMap(
	db: Database,
	subjectName: string,
	query: string
): { [key: string]: Resource[] } {
	const filteredResources: { [key: string]: Resource[] } = {};
	query = query.toLowerCase();

	for (const resource of db.resources) {
		if (resource.subject === subjectName) {
			if (!query) {
				filteredResources[resource.grade] = [
					...(filteredResources[resource.grade] || []),
					resource
				];
			} else {
				if (
					resource.grade.toLowerCase().includes(query) ||
					resource.title.toLowerCase().includes(query) ||
					resource.school.toLowerCase().includes(query) ||
					resource.year.toLowerCase().includes(query) ||
					resource.summary.toLowerCase().includes(query)
				) {
					filteredResources[resource.grade] = [
						...(filteredResources[resource.grade] || []),
						resource
					];
				}
			}
		}
	}

	return filteredResources;
}
