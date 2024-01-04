import fs from 'fs';
import path from 'path';

interface Resource {
	title: string;
	summary: string;
	comment: string;
	subject: string;
	grade: string;
	school: string;
	file_name: string;
	year: string;
}

interface Database {
	subjects: string[];
	resources: Resource[];
}

export const db: Database = { subjects: [], resources: [] };

function importFiles(directoryPath: string) {
	const items = fs.readdirSync(directoryPath, { withFileTypes: true });

	items.forEach((item) => {
		const fullPath = path.join(directoryPath, item.name);
		if (item.isDirectory()) {
			importFiles(fullPath);
		} else if (path.extname(item.name) === '.json') {
			const fileData = fs.readFileSync(fullPath, 'utf8');
			const resource: Resource = JSON.parse(fileData);

			if (!db.subjects.includes(resource.subject)) {
				db.subjects.push(resource.subject);
			}

			db.resources.push(resource);
		}
	});
}

importFiles('static/files');

export function resourcesBySubjectAndGradeMap(
	subjectName: string,
	query: string
): { [key: string]: Resource[] } {
	const filteredResources: { [key: string]: Resource[] } = {};
	query = query.toLowerCase();

	db.resources.forEach((resource) => {
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
	});

	return filteredResources;
}
