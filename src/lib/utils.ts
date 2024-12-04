import type { Resource } from './init';

// links
export const DiscordURL = 'https://discord.com/invite/nWd8yZ4HWY';
export const InstagramURL = 'https://www.instagram.com/schulenimchaos/';
export const GithubURL = 'https://github.com/schulen-im-chaos';
export const NewsletterSignupURL = 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAUjfialUOENINVYzVTRWUFdPSlQ1R0U0QkNBWFZBTi4u';

// helper sorting function
export function filterResources(
	resources: Resource[],
	query: string
): Resource[] {
	const filteredResources: Resource[] = [];
	query = query.toLowerCase();

	for (const resource of resources) {
				if (
					resource.title.toLowerCase().includes(query) ||
					resource.school.toLowerCase().includes(query) ||
					resource.year.toLowerCase().includes(query) ||
					resource.summary.toLowerCase().includes(query)
				) {
					filteredResources.push(resource);
				}
	}

	return filteredResources;
}
